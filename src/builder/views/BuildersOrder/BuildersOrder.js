import React from "react";
import { withStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { CircularProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { BUILDER_BASE_URL } from "../../../routes/URLMap";
import { BuildersOrderToolbar } from "./components";
import OrderCard from "../../../order/OrderCard";
import { getBuilderOrders } from "../../../api/builder";
import { ASSIGNED, CANCEL_BUILDER, COMPLETED } from "../../../utils/variables";

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  progress__container: {
    textAlign: "center",
    paddingTop: "20%",
  },
  content: {
    marginTop: theme.spacing(2),
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

class BuildersOrder extends React.Component {
  state = {
    orders: [],
    error: null,
    isLoading: false,
    search: "",
    pagination: {
      page: 1,
      pageSize: 6,
    },
  };

  componentDidMount() {
    const { status } = this.props.location;
    const {
      pagination: { page, pageSize },
    } = this.state;

    if (status) {
      this.loadOrders(page, pageSize, status.search);
      this.setState({ search: status.search });
    } else {
      this.loadOrders();
    }
  }

  loadOrders = (page, pageSize, search) => {
    this.setState({ isLoading: true, orders: [] }, () => {
      const builderId = this.props.match.params.builderId;
      getBuilderOrders(builderId, page, pageSize, search)
        .then((data) => {
          console.log("order:", data);
          this.setState({
            isLoading: false,
            orders: data.orders,
            pagination: data.pagination,
          });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  };

  handlePageChange = (event, data) => {
    const {
      pagination: { pageSize },
      search,
    } = this.state;
    this.loadOrders(data, pageSize, search);
  };

  handleSearch = (search) => {
    const {
      pagination: { page, pageSize },
    } = this.state;
    this.loadOrders(page, pageSize, search);
    this.setState({ search });
  };

  toLink = (id) => {
    const builderId = this.props.match.params.builderId;
    return `${BUILDER_BASE_URL}/${builderId}/orders/${id}`;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BuildersOrderToolbar
          searchAll={() => this.handleSearch()}
          searchAssigned={() => this.handleSearch(ASSIGNED)}
          searchCompleted={() => this.handleSearch(COMPLETED)}
          searchCancelled={() => this.handleSearch(CANCEL_BUILDER)}
        />
        {this.state.isLoading && (
          <div className={classes.progress__container}>
            <CircularProgress size={150} color="secondary" />
          </div>
        )}
        {this.state.error && (
          <Alert severity="error">
            {" "}
            Sorry, something went wrong:
            <p>{this.state.error.toString()}</p>
          </Alert>
        )}
        {!this.state.isLoading && !this.state.orders.length ? (
          <p> There isn't any order. </p>
        ) : (
          <div className={classes.pagination}>
            <Pagination
              page={this.state.pagination.page}
              count={this.state.pagination.pages}
              onChange={this.handlePageChange}
              shape="rounded"
            />
          </div>
        )}
        <div className={classes.content}>
          <Grid container spacing={3}>
            {this.state.orders.map((orders) => (
              <Grid item key={orders._id} lg={4} md={6} xs={12}>
                <OrderCard
                  order={orders}
                  status={orders.status}
                  to={this.toLink(orders._id)}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(BuildersOrder);
