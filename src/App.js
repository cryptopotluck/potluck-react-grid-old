import React, { PureComponent } from "react";

import Layout from "./components/Layout";
import Dashboard from "./containers/Dashboard";

class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Dashboard />
      </Layout>
    );
  }
}

export default App;
