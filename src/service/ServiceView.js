import React, { Component } from "react";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import styled from "styled-components";
import { createOrder } from "../api/order";
import { isLoggedIn, getClientId } from "../utils/auth";
import TopNav from "../navigation/TopNav";
import { SIGNIN_URL, CLIENT_BASE_URL } from "../routes/URLMap";

const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-wrap: wrap;
`;

class ServiceView extends Component {
  state = {
    storeys: 0,
    bedrooms: 0,
    bathrooms: 0,
    garages: 0,
    address: "",
    dueDate: "",
    price: 0,
    error: null,
    isCreating: false,
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
    this.setState({ [key]: value });
  };

  handleOption = (key, option) => {
    this.setState({ [key]: option }, () => this.calculatePrice());
  };

  clearOption = (key, option) => {
    this.setState({ [key]: "" }, () => this.calculatePrice());
  };

  handleCreate = () => {
    const clientId = getClientId();
    if (!isLoggedIn() || !clientId) {
      this.props.history.push(SIGNIN_URL);
    }

    const order = { ...this.state };

    this.setState({ isCreating: true }, () => {
      createOrder(clientId, order)
        .then((newOrder) => {
          this.props.history.push(
            `${CLIENT_BASE_URL}/${clientId}/orders/${newOrder._id}`
          );
        })
        .catch((error) => this.setState({ error }));
    });
  };

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <Header />
        <Content>
          <Detail
            handleChange={this.handleChange}
            handleOption={this.handleOption}
            clearOption={this.clearOption}
          />
          <Calculator
            price={this.state.price}
            buttontext="Post a Task"
            handleSubmit={this.handleCreate}
          />
        </Content>
      </React.Fragment>
    );
  }
}

export default ServiceView;
