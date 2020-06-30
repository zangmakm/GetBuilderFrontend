import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { RouteWithLayout } from "../builder/components";
import { BUILDER_BASE_URL } from "./URLMap";
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
} from "../builder/layouts";

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
} from "../builder/views";
import HomeView from "../homepage/HomeView";

const BuilderRoutes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from={`${BUILDER_BASE_URL}/:builderId`}
        to={`${BUILDER_BASE_URL}/:builderId/dashboard`}
        component={DashboardView}
      />
      <Route exact path="/home" component={HomeView} />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path={`${BUILDER_BASE_URL}/:builderId/dashboard`}
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path={`${BUILDER_BASE_URL}/:builderId/browse-order`}
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path={`${BUILDER_BASE_URL}/:builderId/order-management`}
      />

      {/* <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      /> */}
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path={`${BUILDER_BASE_URL}/:builderId/account`}
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path={`${BUILDER_BASE_URL}/:builderId/settings`}
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path={`${BUILDER_BASE_URL}/:builderId/logout`}
      />
      {/* <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      /> */}
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default BuilderRoutes;
