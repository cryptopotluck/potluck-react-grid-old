import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import Dashboard from "./containers/Dashboard";
import Forgot from "./containers/Forgot";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

import configureStore from "./store";
import rootReducer from "./reducer";

const appState = localStorage.getItem("appState");
const store = configureStore(rootReducer, {
  app: appState && JSON.parse(appState)
});

store.subscribe(() => {
  const appState = JSON.stringify(store.getState().app);
  localStorage.setItem("appState", appState);
});

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PublicRoute path="/signup" component={Signup} redirectOnLoggedIn />
            <PublicRoute path="/login" component={Login} redirectOnLoggedIn />
            <PublicRoute path="/forgot" component={Forgot} redirectOnLoggedIn />
            <PublicRoute component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
