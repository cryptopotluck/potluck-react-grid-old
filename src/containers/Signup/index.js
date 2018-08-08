import React, { PureComponent } from "react";

import AuthLayout from "../../components/AuthLayout";
import Form from "./Form";

class Signup extends PureComponent {
  render() {
    return (
      <AuthLayout title="Sign up" subtitle="Free access to our dashboard.">
        <Form onSubmit={this.handleSubmit} />
      </AuthLayout>
    );
  }

  handleSubmit = (data) => {
    console.log(data);
  }
}

export default Signup;
