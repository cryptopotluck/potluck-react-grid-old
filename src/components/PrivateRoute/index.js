import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "../Layout";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = ({ app: { authenticated } }) => ({
  authenticated
});

export default connect(mapStateToProps)(PrivateRoute);
