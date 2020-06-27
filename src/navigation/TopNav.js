import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import "./topNav.scss";
import { isLoggedIn } from "../utils/auth";
import { getBuilderId, getClientId } from "../utils/auth";

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

const StyledSignin = styled(NavLink)`
  display: ${(props) => (props.isloggedin ? "none" : "")};
`;

const StyledDashboard = styled(NavLink)`
  display: ${(props) => (props.isloggedin ? "" : "none")};
`;

// const isLoggedIn = () => {
//   return false;
// };

const TopNav = () => {
  const loginClient = getClientId();
  const loginBuilder = getBuilderId();
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
          <StyledDashboard
            isloggedin={isLoggedIn() ? 1 : 0}
            loginclient={loginClient}
            loginbuilder={loginBuilder}
            to={
              loginClient
                ? `clients/${loginClient}`
                : `builders/${loginBuilder}`
            }
            activeStyle={activeStyle}
          >
            DashBoard
          </StyledDashboard>
        </li>
        <li>
          <StyledSignin
            to="/signin"
            isloggedin={isLoggedIn() ? 1 : 0}
            activeStyle={activeStyle}
          >
            SignIn
          </StyledSignin>
        </li>
      </NavContainer>
    </nav>
  );
};

export default withRouter(TopNav);
