import React, { PureComponent } from "react";
import { connect } from "react-redux";

import AuthLayout from "../../components/AuthLayout";
import Form from "./Form";

import { login } from "../../utils/api";
import { loginSubmit, loginSuccess, loginFailure } from "./actions";

class Login extends PureComponent {
  render() {
    const { errors, loading } = this.props;

    return (
      <AuthLayout
        title="Sign in"
        subtitle="Free access to our dashboard."
        errors={errors}
        loading={loading}
      >
        <Form onSubmit={this.handleSubmit} loading={loading} />
      </AuthLayout>
    );
  }

  handleSubmit = data => {
    const { dispatch } = this.props;
    const { email, password } = data;

    dispatch(login(email, password, loginSubmit, loginSuccess, loginFailure));
  };
}

const mapStateToProps = ({ loginPage }) => ({
  ...loginPage
});

export default connect(mapStateToProps)(Login);
