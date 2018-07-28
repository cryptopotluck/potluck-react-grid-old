import React from "react";
import { Collapse } from "reactstrap";

const NavMenu = ({ active, children }) => (
  <Collapse isOpen={active}>
    <ul className="nav nav-sm flex-column">{children}</ul>
  </Collapse>
);

export default NavMenu;
