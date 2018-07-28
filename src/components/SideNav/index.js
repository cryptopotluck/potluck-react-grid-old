import React, { Fragment, PureComponent } from "react";
import { Collapse } from "reactstrap";

import Navigation from "./Navigation";
import NavItem from "./NavItem";
import NotificationsModal from "./NotificationsModal";
import SearchModal from "./SearchModal";
import UserDropdown from "./UserDropdown";

import logo from "../../common/images/logo.png";

class SideNav extends PureComponent {
  handlers = {};
  state = {
    notificationsModal: false,
    searchModal: false,
    sidebarCollapse: true,
    sidebarBattleStation: true,
    sidebarResearch: true,
    sidebarPages: true
  };

  handleToggle = key => {
    return (
      this.handlers[key] ||
      (e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          [key]: !this.state[key]
        });
      })
    );
  };

  render() {
    return (
      <Fragment>
        <NotificationsModal
          active={this.state.notificationsModal}
          toggle={this.handleToggle("notificationsModal")}
        />
        <SearchModal
          active={this.state.searchModal}
          toggle={this.handleToggle("searchModal")}
        />
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.handleToggle("sidebarCollapse")}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="#!">
              <img
                alt="Potluck Ecosystem"
                className="navbar-brand-img mx-auto"
                src={logo}
              />
            </a>
            <div className="navbar-user d-md-none">
              <UserDropdown right />
            </div>
            <Collapse
              className="navbar-collapse"
              isOpen={this.state.sidebarCollapse}
            >
              <Navigation handleToggle={this.handleToggle} {...this.state} />
              <hr className="my-3" />
              <h6 className="navbar-heading text-muted">Documentation</h6>
              <ul className="navbar-nav mb-md-3">
                <NavItem
                  href="#!"
                  icon="fe fe-clipboard"
                  text="Kick Starter"
                  pre
                />
                <NavItem
                  href="#!"
                  icon="fe fe-git-branch"
                  text="Changelog v1.0"
                  pre
                />
              </ul>
              <div className="navbar-user mt-auto d-none d-md-flex">
                <a
                  href="#!"
                  className="text-muted"
                  onClick={this.handleToggle("notificationsModal")}
                >
                  <span className="icon">
                    <i className="fe fe-bell" />
                  </span>
                </a>
                <UserDropdown direction="up" />
                <a
                  href="#!"
                  className="text-muted"
                  onClick={this.handleToggle("searchModal")}
                >
                  <span className="icon">
                    <i className="fe fe-search" />
                  </span>
                </a>
              </div>
            </Collapse>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default SideNav;
