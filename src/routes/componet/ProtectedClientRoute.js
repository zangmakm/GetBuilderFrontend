import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn, getTokenRole } from "../../utils/auth";
import { SIGNIN_URL, HOMEPAGE_URL } from "../URLMap";

const ProtectedClientRoute = ({
  component: ProtectedClientComponent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (!isLoggedIn())
          return (
            <Redirect
              to={{
                pathname: SIGNIN_URL,
                state: { from: routeProps.location.pathname },
              }}
            />
          );
        if (getTokenRole() !== "client")
          return (
            <Redirect
              to={{
                pathname: HOMEPAGE_URL,
                state: { from: routeProps.location.pathname },
              }}
            />
          );

        return <ProtectedClientComponent {...routeProps} />;
      }}
    />
  );
};

export default ProtectedClientRoute;
