import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomeView from "../homepage/HomeView";
import SupportView from "../support/SupportView";
import ServiceView from "../service/ServiceView";
import ServiceInfo from "../service/ServiceInfo";
import SignIn from "../authorization/signin/SignIn";
import SignupBuilder from "../authorization/signup/builder/SignupBuilder";
import SignupClient from "../authorization/signup/client/SignupClient";
import Builder from "../builder/Builder";
import Client from "../client/Client";
import ProtectedBuilderRoute from "./componet/ProtectBuilderRoute";
import ProtectedClientRoute from "./componet/ProtectedClientRoute";
import {
  CLIENT_BASE_URL,
  BUILDER_BASE_URL,
  SIGNIN_URL,
  SIGNUP_URL,
  HOMEPAGE_URL,
  TASK_URL,
  SUPPORT_URL,
  SERVICE_URL,
} from "./URLMap";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={HOMEPAGE_URL} />
      <Route exact path={HOMEPAGE_URL} component={HomeView} />
      <Route exact path={TASK_URL} component={ServiceView} />
      <Route exact path={`${SERVICE_URL}/:id`} component={ServiceInfo} />
      <Route exact path={SUPPORT_URL} component={SupportView} />
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
        component={Client}
      />
    </Switch>
  );
};

export default Routes;
