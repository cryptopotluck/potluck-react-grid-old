import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import Dashboard from "./containers/Dashboard";
import Forgot from "./containers/Forgot";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PublicRoute path="/signup" component={Signup} redirectOnLoggedIn />
          <PublicRoute path="/login" component={Login} redirectOnLoggedIn />
          <PublicRoute path="/forgot" component={Forgot} redirectOnLoggedIn />
          <PublicRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
