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
  Alltasks as AlltasksView,
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
        component={AlltasksView}
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
        layout={MainLayout}
        path={`${CLIENT_BASE_URL}/:clientId/orders/:orderId`}
        component={OrderDetail}
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

export default ClientRoutes;
