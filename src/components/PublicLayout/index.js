import React from "react";

const PublicLayout = ({ children }) => (
  <div className="d-flex align-items-center bg-white border-top border-top-2 border-primary">
    <div className="container-fluid">{children}</div>
  </div>
);

export default PublicLayout;
