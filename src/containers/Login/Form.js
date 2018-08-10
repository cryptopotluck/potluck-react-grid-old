import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

const Form = ({ handleSubmit, loading }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Email Address</label>
      <Field
        className="form-control"
        component="input"
        name="email"
        placeholder="name@address.com"
        type="email"
        required
      />
    </div>
    <div className="form-group">
      <div className="row">
        <div className="col">
          <label>Password</label>
        </div>
        <div className="col-auto">
          <Link to="/forgot" className="form-text small text-muted" tabIndex="-1">
            Forgot password?
          </Link>
        </div>
      </div>
      <div className="input-group input-group-merge">
        <Field
          className="form-control form-control-appended"
          component="input"
          name="password"
          placeholder="Enter your password"
          type="password"
          required
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fe fe-eye" />
          </span>
        </div>
      </div>
    </div>
    <button className="btn btn-lg btn-block btn-primary mb-3" disabled={loading}>
      Sign in
    </button>
    <div className="text-center">
      <small className="text-muted text-center">
        Don't have an account yet? <Link to="/signup">Sign up</Link>.
      </small>
    </div>
  </form>
);

export default reduxForm({
  form: "loginForm"
})(Form);
