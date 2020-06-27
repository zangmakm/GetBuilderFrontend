import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn, getTokenRole } from "../../utils/auth";
import { SIGNIN_URL, HOMEPAGE_URL } from "../URLMap";

const ProtectedBuilderRoute = ({
  component: ProtectedBuilderComponent,
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
        if (getTokenRole() !== "builder")
          return (
            <Redirect
              to={{
                pathname: HOMEPAGE_URL,
                state: { from: routeProps.location.pathname },
              }}
            />
          );

        return <ProtectedBuilderComponent {...routeProps} />;
      }}
    />
  );
};

export default ProtectedBuilderRoute;
