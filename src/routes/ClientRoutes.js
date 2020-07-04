import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { RouteWithLayout } from "../builder/components";
import { CLIENT_BASE_URL } from "./URLMap";
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
  NotFound as NotFoundView,
} from "../builder/views";
import OrderDetail from "../client/OrderDetail";

const ClientRoutes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from={`${CLIENT_BASE_URL}/:clientId`}
        to={`${CLIENT_BASE_URL}/:clientId/dashboard`}
        component={DashboardView}
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path={`${CLIENT_BASE_URL}/:clientId/dashboard`}
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path={`${CLIENT_BASE_URL}/:clientId/browse-order`}
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path={`${CLIENT_BASE_URL}/:clientId/order-management`}
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
        path={`${CLIENT_BASE_URL}/:clientId/account`}
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path={`${CLIENT_BASE_URL}/:clientId/settings`}
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path={`${CLIENT_BASE_URL}/:clientId/logout`}
      />
      <RouteWithLayout
        layout={MainLayout}
        path={`${CLIENT_BASE_URL}/:clientId/orders/:orderId`}
        component={OrderDetail}
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

export default ClientRoutes;
