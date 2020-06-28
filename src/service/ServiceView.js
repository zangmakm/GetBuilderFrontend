import React, { Component } from "react";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import styled from "styled-components";
import { createOrder } from "../api/order";

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
    dueDate: "",
    description: "",
    error: null,
    isCreating: false,
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleCreate = () => {
    const order = { ...this.state };
    this.setState({ isCreating: true }, () => {
      createOrder(order)
        .then((newOrder) => {
          console.log(newOrder);
        })
        .catch((error) => this.setState({ error }));
    });
  };

  render() {
    const {
      storeys,
      bedrooms,
      bathrooms,
      garages,
      address,
      dueDate,
      description,
    } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Content>
          <Detail
            handleChange={this.handleChange}
            storeys={storeys}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            garages={garages}
            address={address}
            dueDate={dueDate}
            description={description}
          />
          <Calculator handleSubmit={this.handleCreate} />
        </Content>
      </React.Fragment>
    );
  }
}

export default ServiceView;
