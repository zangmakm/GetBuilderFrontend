import React, { Component } from "react";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import styled from "styled-components";
import { createOrder } from "../api/order";
import { getClientId } from "../utils/auth";
import TopNav from "../navigation/TopNav";

const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-wrap: wrap;
`;

class ServiceView extends Component {
  state = {
    storeys: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
    address: "",
    postDate: "",
    dueDate: "",
    error: null,
    isCreating: false,
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleOption = (key, option) => {
    this.setState({ [key]: option });
  };

  clearOption = (key, option) => {
    this.setState({ [key]: "" });
  };

  handleCreate = () => {
    const order = { ...this.state };
    this.setState({ isCreating: true }, () => {
      const clientId = getClientId();
      console.log(clientId);
      createOrder(clientId, order)
        .then((newOrder) => {
          console.log(newOrder);
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
          <Calculator handleSubmit={this.handleCreate} />
        </Content>
      </React.Fragment>
    );
  }
}

export default ServiceView;
