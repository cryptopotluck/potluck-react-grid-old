import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout";

class Forgot extends PureComponent {
  render() {
    return (
      <AuthLayout
        title="Password reset"
        subtitle="Enter your email to get a password reset link."
      >
        <form>
          <div class="form-group">
            <label>Email Address</label>
            <input
              type="email"
              class="form-control"
              placeholder="name@address.com"
              required
            />
          </div>
          <button class="btn btn-lg btn-block btn-primary mb-3">
            Reset Password
          </button>
          <div class="text-center">
            <small class="text-muted text-center">
              Remember your password? <Link to="/login">Log in</Link>.
            </small>
          </div>
        </form>
      </AuthLayout>
    );
  }
}

export default Forgot;
