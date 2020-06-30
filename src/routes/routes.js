import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomeView from "../homepage/HomeView";
import ServiceView from "../service/ServiceView";
import SignIn from "../authorization/signin/SignIn";
import SignupBuilder from "../authorization/signup/builder/SignupBuilder";
import SignupClient from "../authorization/signup/client/SignupClient";
import Dashboard from "../client/Dashboard";
import Builder from "../builder/Builder";
import ProtectedBuilderRoute from "./componet/ProtectBuilderRoute";
import ProtectedClientRoute from "./componet/ProtectedClientRoute";
import {
  CLIENT_BASE_URL,
  BUILDER_BASE_URL,
  SIGNIN_URL,
  SIGNUP_URL,
  HOMEPAGE_URL,
  SERVICE_URL,
  SUPPORT_URL,
} from "./URLMap";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={HOMEPAGE_URL} />
      <Route exact path={HOMEPAGE_URL} component={HomeView} />
      <Route exact path={SERVICE_URL} component={ServiceView} />
      <Route exact path={SIGNIN_URL} component={SignIn} />
      <Route
        exact
        path={`${SIGNUP_URL}/user/builder`}
        component={SignupBuilder}
      />
      <Route
        exact
        path={`${SIGNUP_URL}/user/client`}
        component={SignupClient}
      />
      <ProtectedBuilderRoute
        path={`${BUILDER_BASE_URL}/:builderId`}
        component={Builder}
      />
      <ProtectedClientRoute
        path={`${CLIENT_BASE_URL}/:clientId`}
        component={Dashboard}
      />
    </Switch>
  );
};

export default Routes;
