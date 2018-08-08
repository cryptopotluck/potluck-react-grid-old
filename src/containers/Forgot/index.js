import React, { PureComponent } from "react";

import AuthLayout from "../../components/AuthLayout";
import Form from "./Form";

class Forgot extends PureComponent {
  render() {
    return (
      <AuthLayout
        title="Password reset"
        subtitle="Enter your email to get a password reset link."
      >
        <Form onSubmit={this.handleSubmit} />
      </AuthLayout>
    );
  }

  handleSubmit = (data) => {
    console.log(data);
  }
}

export default Forgot;
