import React from "react";

import NavItem from "./NavItem";
import NavMenu from "./NavMenu";

const Navigation = ({ handleToggle, ...active }) => (
  <ul className="navbar-nav">
    <NavItem
      href="#!"
      icon="fab fa-fort-awesome-alt"
      text="Battle Station"
      active
      pre
      onClick={handleToggle("sidebarBattleStation")}
    >
      <NavMenu active={active.sidebarBattleStation}>
        <NavItem
          href="#!"
          icon="fab fa-searchengin"
          text="Research"
          pre
          onClick={handleToggle("sidebarResearch")}
        >
          <NavMenu active={active.sidebarResearch}>
            <NavItem href="#!" text="Main Coins" icon="fab fa-btc" active />
            <NavItem href="#!" icon="fas fa-trophy" text="Top 50 Altcoins" />
            <NavItem href="#!" icon="fas fa-medal" text="Top 50-100 Altcoins" />
            <NavItem
              href="#!"
              icon="fab fa-medapps"
              text="Top 100-150 Altcoins"
            />
          </NavMenu>
        </NavItem>
      </NavMenu>
    </NavItem>
    <NavItem
      href="#!"
      icon="fas fa-users"
      text="Community"
      pre
      onClick={handleToggle("sidebarPages")}
    >
      <NavMenu active={active.sidebarPages}>
        <NavItem
          href="#!"
          icon="fas fa-user"
          text="Profile"
          pre
          onClick={handleToggle("sidebarProfile")}
        >
          <NavMenu active={active.sidebarProfile}>
            <NavItem href="#!" icon="fas fa-chart-line" text="Traders Feed" />
            <NavItem href="#!" icon="fas fa-lock" text="Private Feed" />
            <NavItem href="#!" icon="fas fa-briefcase" text="Side Hustles" />
            <NavItem href="#!" icon="fas fa-money-check" text="Trade History" />
            <NavItem href="#!" icon="fas fa-diagnoses" text="Subscribers " />
          </NavMenu>
        </NavItem>
        <NavItem
          href="#!"
          icon="fas fa-flask"
          text="Strategy Creation Lab"
          pre
          onClick={handleToggle("sidebarTeam")}
        >
          <NavMenu active={active.sidebarTeam}>
            <NavItem
              href="#!"
              icon="fas fa-user-astronaut"
              text="Positive Price Action"
            />
            <NavItem
              href="#!"
              icon="fab fa-creative-commons-nc"
              text="Negative Price Action"
            />
            <NavItem href="#!" icon="far fa-eye" text="Future Speculation" />
          </NavMenu>
        </NavItem>
      </NavMenu>
    </NavItem>
    <NavItem
      className="d-md-none"
      href="#!"
      icon="fe fe-bell"
      text="Notifications"
      pre
      onClick={handleToggle("notificationsModal")}
    />
  </ul>
);

export default Navigation;
