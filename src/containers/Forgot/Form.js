import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

const Form = ({ loading, setPassword, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    {!setPassword && (
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
    )}
    {setPassword && (
      <div className="form-group">
        <label>New password</label>
        <Field
          className="form-control"
          component="input"
          name="password"
          placeholder="password"
          type="password"
          required
        />
      </div>
    )}
    <button
      className="btn btn-lg btn-block btn-primary mb-3"
      disabled={loading}
    >
      Reset Password
    </button>
    <div className="text-center">
      <small className="text-muted text-center">
        Remember your password? <Link to="/login">Log in</Link>.
      </small>
    </div>
  </form>
);

export default reduxForm({
  form: "forgotForm"
})(Form);
