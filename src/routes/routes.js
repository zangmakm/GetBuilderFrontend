import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../homepage/HomeView";
import ServiceView from "../service/ServiceView";
import profile from "../profile/profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={HomeView} />
      <Route exact path="/service" component={ServiceView} />
      <Route exact path="/profile" component={profile} />
    </Switch>
  );
};

export default Routes;
