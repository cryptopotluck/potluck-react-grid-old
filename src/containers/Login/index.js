import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout";

class Login extends PureComponent {
  render() {
    return (
      <AuthLayout title="Sign in" subtitle="Free access to our dashboard.">
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
            <div className="row">
              <div className="col">
                <label>Password</label>
              </div>
              <div className="col-auto">
                <Link to="/forgot" className="form-text small text-muted">
                  Forgot password?
                </Link>
              </div>
            </div>
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
            Sign in
          </button>
          <div className="text-center">
            <small className="text-muted text-center">
              Don't have an account yet? <Link to="/signup">Sign up</Link>.
            </small>
          </div>
        </form>
      </AuthLayout>
    );
  }
}

export default Login;
