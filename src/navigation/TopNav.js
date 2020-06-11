import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import "./topNav.scss";

const NavContainer = styled.ul`
  display: flex;
  width: 100%;
  justify-content: right;
  list-style: none;
  margin: 0;
  height: 30px;
  li {
    margin: 0 20px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    text-transform: uppercase;
  }
`;

const activeStyle = {
  textDecoration: "underline",
};

const TopNav = () => {
  return (
    <nav className="nav">
      <NavContainer>
        <li>
          <NavLink to="/home" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" activeStyle={activeStyle}>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeStyle={activeStyle}>
            DashBoard
          </NavLink>
        </li>
      </NavContainer>
    </nav>
  );
};

export default withRouter(TopNav);
