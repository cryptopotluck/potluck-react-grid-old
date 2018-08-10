import React from "react";
import classnames from "classnames";

import Errors from "../Errors";

import videos from "../../common/images/videos";

const AuthLayout = ({ children, errors, loading, subtitle, title }) => (
  <div className="row align-items-center">
    <div
      className="col-md-6 order-md-2 mb-5 mb-md-0 d-none d-md-block"
      style={{ height: "100vh" }}
    >
      <img
        src={videos(0)}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        alt="video"
      />
    </div>
    <div className="col-md-6 order-md-1 px-20">
      <h1 className="display-4 text-center mb-3">{title}</h1>
      <p
        className={classnames("text-center", "mb-5", {
          "text-danger": !!errors,
          "text-muted": !errors
        })}
      >
        {!errors && !loading && subtitle}
        {errors && <Errors errors={errors} />}
        {loading && "Working, please wait..."}
      </p>
      {children}
    </div>
  </div>
);

export default AuthLayout;
