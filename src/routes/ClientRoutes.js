import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { RouteWithLayout } from "../client/components";
import { CLIENT_BASE_URL } from "./URLMap";
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
} from "../client/layouts";

import {
  Dashboard as DashboardView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  NotFound as NotFoundView,
} from "../client/views";
import OrderDetail from "../order/OrderDetail";

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
        path={`${CLIENT_BASE_URL}/:clientId/not-found`}
      />
      <Redirect to={`${CLIENT_BASE_URL}/:clientId/not-found`} />
    </Switch>
  );
};

export default ClientRoutes;
