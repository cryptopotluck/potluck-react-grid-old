import React, { PureComponent } from "react";
import { connect } from "react-redux";
import qs from "query-string";

import AuthLayout from "../../components/AuthLayout";
import Form from "./Form";

import { resetPassword, requestResetPassword } from "../../utils/api";
import { forgotSubmit, forgotSuccess, forgotFailure } from "./actions";

class Forgot extends PureComponent {
  render() {
    const { errors, loading, token } = this.props;

    return (
      <AuthLayout
        title="Password reset"
        subtitle={this.subtitle()}
        errors={errors}
        loading={loading}
      >
        <Form
          onSubmit={this.handleSubmit}
          loading={loading}
          setPassword={!!token}
        />
      </AuthLayout>
    );
  }

  handleSubmit = data => {
    const { dispatch, token } = this.props;
    const { email, password } = data;

    if (token) {
      dispatch(
        resetPassword(
          password,
          token,
          forgotSubmit,
          forgotSuccess,
          forgotFailure
        )
      );
    } else {
      dispatch(
        requestResetPassword(email, forgotSubmit, forgotSuccess, forgotFailure)
      );
    }
  };

  subtitle = () => {
    const { success, token } = this.props;
    if (success && token) return "Password changed, login with your new password!";
    if (success && !token) return "Please check your email!";
    if (!success && token) return "Please choose a new password";

    return "Enter your email to get a password reset link.";
  };
}

const mapStateToProps = ({ forgotPage }, { location: { search } }) => ({
  ...forgotPage,
  token: qs.parse(search).token
});

export default connect(mapStateToProps)(Forgot);
