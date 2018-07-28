import React from "react";
import classNames from "classnames";

const data = { "data-toggle": "collapse" };

const NavItem = ({
  active,
  className,
  children,
  controls,
  href,
  icon,
  pre,
  text,
  onClick
}) => (
  <li className={`nav-item ${className}`}>
    <a
      role="button"
      aria-expanded="false"
      aria-controls={controls}
      className={classNames("nav-link", { active })}
      href={href}
      onClick={onClick}
      {...(onClick ? data : {})}
    >
      {pre && icon && <i className={icon} />}
      <span>&nbsp;{` ${text} `}&nbsp;</span>
      {!pre && icon && <i className={icon} />}
    </a>
    {children}
  </li>
);

export default NavItem;
