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
  Account as AccountView,
  Settings as SettingsView,
  NotFound as NotFoundView,
} from "../builder/views";

const BuilderRoutes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from={`${BUILDER_BASE_URL}/:builderId`}
        to={`${BUILDER_BASE_URL}/:builderId/dashboard`}
        component={DashboardView}
      />
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
