import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../homepage/HomeView";
import ServiceView from "../service/ServiceView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomeView} />
      <Route exact path="/service" component={ServiceView} />
    </Switch>
  );
};

export default Routes;
