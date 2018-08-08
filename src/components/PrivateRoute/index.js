import React from "react";
import { Route, Redirect } from "react-router-dom";

import Layout from "../Layout";

import config from "../../config";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      config.authenticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
