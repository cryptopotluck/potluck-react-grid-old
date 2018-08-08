import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout";

class Signup extends PureComponent {
  render() {
    return (
      <AuthLayout title="Sign up" subtitle="Free access to our dashboard.">
        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@address.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-group input-group-merge">
              <input
                type="password"
                className="form-control form-control-appended"
                placeholder="Enter your password"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fe fe-eye" />
                </span>
              </div>
            </div>
          </div>
          <button className="btn btn-lg btn-block btn-primary mb-3">
            Sign up
          </button>
          <div className="text-center">
            <small className="text-muted text-center">
              Already have an account? <Link to="/login">Log in</Link>.
            </small>
          </div>
        </form>
      </AuthLayout>
    );
  }
}

export default Signup;
