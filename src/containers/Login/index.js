import React, { PureComponent } from "react";

import AuthLayout from "../../components/AuthLayout";
import Form from "./Form";

class Login extends PureComponent {
  render() {
    return (
      <AuthLayout title="Sign in" subtitle="Free access to our dashboard.">
        <Form onSubmit={this.handleSubmit} />
      </AuthLayout>
    );
  }

  handleSubmit = (data) => {
    console.log(data);
  }
}

export default Login;
