import React, { PureComponent } from "react";
import { connect } from "react-redux";

import AuthLayout from "../../components/AuthLayout";
import Form from "./Form";

import { signup } from "../../utils/api";
import { signupSubmit, signupSuccess, signupFailure } from "./actions";

class Signup extends PureComponent {
  render() {
    const { errors, loading } = this.props;

    return (
      <AuthLayout
        title="Sign up"
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
    const { email, password, discordId } = data;

    dispatch(
      signup(
        email,
        discordId,
        password,
        signupSubmit,
        signupSuccess,
        signupFailure
      )
    );
  };
}

const mapStateToProps = ({ signupPage }) => ({
  ...signupPage
});

export default connect(mapStateToProps)(Signup);
