import React from "react";
import { connect } from "react-redux";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import avatars from "../../common/images/avatars";
import { logout } from "../../actions";

const UserDropdown = ({ direction, right, handleLogout }) => (
  <UncontrolledDropdown>
    <DropdownToggle nav direction={direction}>
      <div className="avatar avatar-sm avatar-online">
        <img
          src={avatars(8)}
          className="avatar-img rounded-circle"
          alt="user"
        />
      </div>
    </DropdownToggle>
    <DropdownMenu right={right}>
      <DropdownItem tag="a" href="#!">
        Profile
      </DropdownItem>
      <DropdownItem tag="a" href="#!">
        Settings
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem tag="a" onClick={handleLogout}>
        Logout
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const mapDispatchToProps = {
  handleLogout: logout
};

export default connect(
  null,
  mapDispatchToProps
)(UserDropdown);
