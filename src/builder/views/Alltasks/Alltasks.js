import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { ProductsToolbar } from "./components";
import OrderCard from "../../../order/OrderCard";
import { getAllOrders } from "../../../api/order";

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(3),
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
      pageSize: 6,
    },
  };

  componentDidMount() {
    this.loadOrders();
  }
  loadOrders = (page, pagenation) => {
    this.setState({ isLoading: true, orders: [] }, () => {
      getAllOrders(page, pagenation)
        .then((data) => {
          console.log("order:", data);
          this.setState({
            isLoading: false,
            orders: data.orders,
            pagenation: data.pagenation,
          });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  };

  render() {
    const { classes } = this.props;
    const builderId = this.props.match.params.builderId;

    return (
      <div className={classes.root}>
        <ProductsToolbar />
        <div className={classes.pagination}>
          <Pagination
            page={this.state.pagination.page}
            count={this.state.pagination.pages}
            //onChange={this.handlePageChange}
            shape="rounded"
          />
        </div>
        <div className={classes.content}>
          <Grid container spacing={3}>
            {this.state.orders.map((orders) => (
              <Grid item key={orders._id} lg={4} md={6} xs={12}>
                <OrderCard order={orders} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Alltasks);
