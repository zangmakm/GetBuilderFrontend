import React from "react";
import { withStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Alert from "@material-ui/lab/Alert";
import { CircularProgress } from "@material-ui/core";
import { TasksToolbar, SortDate, SortPrice, TasksTable } from "./components";
import { getAllOrders } from "../../../api/order";

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  toolbar: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    margin: theme.spacing(2),
    flexDirection: "row",
    paddingTop: "0.8rem",
    paddingBottom: "0.6rem",
    marginBottom: "0.4rem",
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

class Alltasks extends React.Component {
  state = {
    orders: [],
    error: null,
    isLoading: false,
    pagination: {
      page: 1,
      pageSize: 5,
    },
  };

  componentDidMount() {
    this.loadOrders();
  }

  loadOrders = (page, pagenation) => {
    this.setState({ isLoading: true, orders: [] }, () => {
      getAllOrders(page, pagenation)
        .then((data) => {
          console.log("data:", data);
          this.setState({
            isLoading: false,
            orders: data.orders,
            pagination: data.pagination,
          });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  };

  sortAscending = () => {
    const { orders } = this.state;

    orders.sort((a, b) => {
      let keyA = new Date(a.dueDate),
        keyB = new Date(b.dueDate);
      return keyA - keyB;
    });
    this.setState({ orders });
  };

  sortDescending = () => {
    const { orders } = this.state;

    orders.sort((a, b) => {
      let keyA = new Date(a.dueDate),
        keyB = new Date(b.dueDate);
      return keyB - keyA;
    });
    this.setState({ orders });
  };

  sortPriceAscending = () => {
    const { orders } = this.state;

    orders.sort((a, b) => {
      let keyA = a.price,
        keyB = b.price;
      return keyA - keyB;
    });
    this.setState({ orders });
  };

  sortPriceDescending = () => {
    const { orders } = this.state;

    orders.sort((a, b) => {
      let keyA = a.price,
        keyB = b.price;
      return keyB - keyA;
    });
    this.setState({ orders });
  };

  handlePageChange = (event, data) => {
    this.loadOrders(data);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.toolbar}>
          <SortDate
            sortAscending={this.sortAscending}
            sortDescending={this.sortDescending}
          />
          <SortPrice
            sortAscending={this.sortPriceAscending}
            sortDescending={this.sortPriceDescending}
          />
          <TasksToolbar />
        </div>
        {this.state.isLoading ? (
          <div className={classes.progress__container}>
            <CircularProgress size={100} color="secondary" />
          </div>
        ) : (
          <div>
            <div className={classes.pagination}>
              <Pagination
                page={this.state.pagination.page}
                count={this.state.pagination.pages}
                onChange={this.handlePageChange}
                shape="rounded"
              />
            </div>
            <div className={classes.content}>
              <TasksTable orders={this.state.orders} />
            </div>
            {this.state.error && (
              <Alert severity="error">{this.state.error}</Alert>
            )}
            {!this.state.isLoading && !this.state.orders.length && (
              <p> There isn't any order. </p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(useStyles)(Alltasks);
