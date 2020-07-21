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
  ClientsOrder as ClientsOrderView,
  Account as AccountView,
  Settings as SettingsView,
  NotFound as NotFoundView,
} from "../client/views";
import OrderDetail from "../client/views/ClientsOrder/OrderDetail";
import OrderEdit from "../client/views/ClientsOrder/components/OrderEdit";

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
        component={ClientsOrderView}
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
        component={OrderDetail}
        exact
        layout={MainLayout}
        path={`${CLIENT_BASE_URL}/:clientId/orders/:orderId`}
      />
      <RouteWithLayout
        component={OrderEdit}
        exact
        layout={MainLayout}
        path={`${CLIENT_BASE_URL}/:clientId/orders/:orderId/edit`}
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
