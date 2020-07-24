import React, { Component } from "react";
import OrderEditDetail from "./OrderEditDetail";
import Calculator from "../../../../../service/components/Calculator";
import styled from "styled-components";
import { getOrder, updateOrder } from "../../../../../api/order";
import { CLIENT_BASE_URL } from "../../../../../routes/URLMap";
import { CircularProgress, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const ProgressContainer = styled.div`
  padding: 20%;
  text-align: center;
`;

class OrderEdit extends Component {
  state = {
    storeys: 0,
    bedrooms: 0,
    bathrooms: 0,
    garages: 0,
    address: "",
    dueDate: "",
    price: "0",
    error: null,
    isLoading: false,
    isUpdating: false,
  };

  componentDidMount() {
    const orderId = this.props.match.params.orderId;
    this.loadOrder(orderId);
  }

  loadOrder = (orderId) => {
    this.setState({ isLoading: true }, () => {
      getOrder(orderId)
        .then((order) => {
          this.setState({
            storeys: order.storeys,
            bedrooms: order.bedrooms,
            bathrooms: order.bathrooms,
            garages: order.garages,
            address: order.address,
            dueDate: order.dueDate,
            price: order.price,
            isLoading: false,
          });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  };

  calculatePrice = () => {
    let totalPrice =
      this.state.storeys * 200000 +
      this.state.bedrooms * 50000 +
      this.state.bathrooms * 50000 +
      this.state.garages * 50000;

    this.setState({
      price: totalPrice,
    });
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value }, () => this.calculatePrice());
  };

  handleUpdate = () => {
    const order = { ...this.state };

    this.setState({ isUpdating: true }, () => {
      const orderId = this.props.match.params.orderId;
      const clientId = this.props.match.params.clientId;
      updateOrder(orderId, order)
        .then(() => {
          this.props.history.push(
            `${CLIENT_BASE_URL}/${clientId}/orders/${orderId}`
          );
        })
        .catch((error) => this.setState({ error, isUpdating: false }));
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <ProgressContainer>
          <CircularProgress size={150} color="secondary" />
        </ProgressContainer>
      );
    }
    if (this.state.isUpdating) {
      return (
        <ProgressContainer>
          <CircularProgress size={150} color="secondary" />
        </ProgressContainer>
      );
    }
    if (!!this.state.error) {
      return <Alert severity="error">{this.state.error.toString()}</Alert>;
    }
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item md={7} xs={12}>
            <OrderEditDetail
              handleChange={this.handleChange}
              storeys={this.state.storeys}
              bedrooms={this.state.bedrooms}
              bathrooms={this.state.bathrooms}
              garages={this.state.garages}
              address={this.state.address}
              dueDate={this.state.dueDate}
            />
          </Grid>
          <Grid item md={5} xs={12}>
            <Calculator
              price={this.state.price}
              buttontext="Update My Order"
              handleSubmit={this.handleUpdate}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default OrderEdit;
