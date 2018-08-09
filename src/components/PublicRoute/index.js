import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import PublicLayout from "../PublicLayout";

const PublicRoute = ({
  component: Component,
  authenticated,
  redirectOnLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      redirectOnLoggedIn && authenticated ? (
        <Redirect to="/" />
      ) : (
        <PublicLayout>
          <Component {...props} />
        </PublicLayout>
      )
    }
  />
);

const mapStateToProps = ({ app: { authenticated } }) => ({
  authenticated
});

export default connect(mapStateToProps)(PublicRoute);
