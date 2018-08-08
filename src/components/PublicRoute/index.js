import React from "react";
import { Route, Redirect } from "react-router-dom";

import PublicLayout from "../PublicLayout";

import config from "../../config";

const PublicRoute = ({ component: Component, redirectOnLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      redirectOnLoggedIn && config.authenticated ? (
        <Redirect to="/" />
      ) : (
        <PublicLayout>
          <Component {...props} />
        </PublicLayout>
      )
    }
  />
);

export default PublicRoute;
