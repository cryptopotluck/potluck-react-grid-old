import React, { Fragment } from "react";

import SideNav from "../SideNav";

const Layout = ({ children }) => (
  <Fragment>
    <SideNav />
    <div id="main-contents">{children}</div>
  </Fragment>
);

export default Layout;
