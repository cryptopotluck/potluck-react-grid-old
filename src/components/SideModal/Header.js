import React from "react";

import { ModalHeader } from "reactstrap";

const Header = ({ title, toggle }) => (
  <ModalHeader toggle={toggle}>{title}</ModalHeader>
);

export default Header;
