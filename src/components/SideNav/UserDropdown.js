import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import avatars from "../../common/images/avatars";

const UserDropdown = ({ direction, right }) => (
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
      <DropdownItem tag="a" href="#!">
        Logout
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default UserDropdown;
