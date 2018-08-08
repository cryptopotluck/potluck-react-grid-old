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
    <button className="btn btn-lg btn-block btn-primary mb-3">
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
