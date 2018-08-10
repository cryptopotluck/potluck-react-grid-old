import React from "react";
import { connect } from "react-redux";
import { get } from "lodash";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import avatars from "../../common/images/avatars";
import { logout } from "../../actions";

const UserDropdown = ({ direction, email, right, handleLogout }) => (
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
      <DropdownItem tag="span" disabled>
        {email}
      </DropdownItem>
      <DropdownItem tag="a" href="#!">
        Profile
      </DropdownItem>
      <DropdownItem tag="a" href="#!">
        Settings
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem tag="button" onClick={handleLogout}>
        Logout
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const mapStateToProps = ({ app: { userId, users }}) => ({
  email: get(users, `[${userId}].attributes.email`)
});

const mapDispatchToProps = {
  handleLogout: logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDropdown);
