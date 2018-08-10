import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

const Form = ({ handleSubmit }) => (
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
      <label>Discord Username</label>
      <Field
        className="form-control"
        component="input"
        name="discordId"
        placeholder="discord Username"
        type="text"
      />
    </div>
    <div className="form-group">
      <label>Password</label>
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
    <button className="btn btn-lg btn-block btn-primary mb-3" type="submit">
      Sign up
    </button>
    <div className="text-center">
      <small className="text-muted text-center">
        Already have an account? <Link to="/login">Log in</Link>.
      </small>
    </div>
  </form>
);

export default reduxForm({
  form: "signupForm"
})(Form);
