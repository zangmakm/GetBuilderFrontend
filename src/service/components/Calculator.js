import React, { Component } from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import CountUp from "react-countup";

const CalContainer = styled.div`
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 50vh;
  margin: 5px 10%;
`;

const Ad = styled.div`
  padding: 5px 0;
  span {
    padding-right: 5px;
  }
`;

const Price = styled.div`
  text-align: center;
  font-size: 2rem;
`;

const CalButton = styled.div`
  padding: 3px 10px;
  margin-top: 10%;
  background-image: linear-gradient(to top, #240b36, #c31432);
  color: #fff;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

class Calculator extends Component {
  render() {
    return (
      <CalContainer>
        <h4>ESTIMATED PRICE*</h4>
        <Ad>
          <Price>
            $
            <CountUp
              start={0}
              end={this.props.price}
              duration={2}
              separator=","
            />
          </Price>
        </Ad>
        <Ad>
          <span style={{ color: "green" }}>
            <FiCheck />
          </span>
          <span>Get Instant quotes in minutes</span>
        </Ad>
        <Ad>
          <span style={{ color: "green" }}>
            <FiCheck />
          </span>
          <span>1000's of reviewed builders</span>
        </Ad>
        <Ad>
          <span style={{ color: "green" }}>
            <FiCheck />
          </span>
          <span>It's free to try - give it a go!</span>
        </Ad>
        <CalButton onClick={this.props.handleSubmit}>
          {this.props.buttontext}
        </CalButton>
      </CalContainer>
    );
  }
}

export default Calculator;
