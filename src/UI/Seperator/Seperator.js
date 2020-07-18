import React from "react";
import styled from "styled-components";
import img from "./buildings.jpg";

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  baclground-attachment: fixed;
  position: relative;
`;

const overlayStyle = {
  backgroundColor: "rgba(0,0,0,0.5)",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

export const Seperator = (props) => {
  return (
    <Container>
      <div style={overlayStyle}></div>
      {props.children}
    </Container>
  );
};
