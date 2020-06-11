import React, { Component } from "react";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import styled from "styled-components";

const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
  font-family: "Nunito", sans-serif;
  display: flex;
  flex-wrap: wrap;
`;

class ServiceView extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <Detail />
          <Calculator />
        </Content>
      </div>
    );
  }
}

export default ServiceView;
