import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import { isLoggedIn } from "../utils/auth";
import { getBuilderId, getClientId } from "../utils/auth";
import logoImg from "./logo.png";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const activeStyle = {
  borderBottom: "solid 2px ",
  paddingBottom: "1px",
};

const StyledSignin = styled(NavLink)`
  display: ${(props) => (props.isloggedin ? "none" : "")};
`;

const StyledDashboard = styled(NavLink)`
  display: ${(props) => (props.isloggedin ? "" : "none")};
`;

const useStyles = makeStyles((theme) => ({
  topNav: {
    backgroundColor: "#fafafa",
  },
  logo: {
    flex: 1,
  },
  navItem: {
    margin: theme.spacing(2),
  },
}));

const TopNav = () => {
  const classes = useStyles();
  const loginClient = getClientId();
  const loginBuilder = getBuilderId();
  return (
    <React.Fragment>
      <AppBar className={classes.topNav}>
        <Toolbar>
          <Toolbar className={classes.logo}>
            <img
              src={logoImg}
              style={{ maxWidth: "100px", marginRight: "5px" }}
            />
            <Typography variant="h1" align="right">
              <NavLink to="/home">BuildersBuddy</NavLink>
            </Typography>
          </Toolbar>
          <Typography variant="h5" className={classes.navItem}>
            <NavLink to="/task" activeStyle={activeStyle}>
              POST TASK
            </NavLink>
          </Typography>
          <Typography variant="h5" className={classes.navItem}>
            <NavLink to="/support" activeStyle={activeStyle}>
              SUPPORT
            </NavLink>
          </Typography>
          <Typography variant="h5" align="right" className={classes.navItem}>
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
              DASHBOARD
            </StyledDashboard>
          </Typography>
          <Typography variant="h5" align="right" className={classes.navItem}>
            <StyledSignin
              to="/signin"
              isloggedin={isLoggedIn() ? 1 : 0}
              activeStyle={activeStyle}
            >
              SIGNIN
            </StyledSignin>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default withRouter(TopNav);
