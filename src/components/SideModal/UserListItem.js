import React from "react";

const UserListItem = ({ action, avatar, href, subtitle, time, title }) => (
  <a className="list-group-item px-0" href="#!">
    <div className="row">
      <div className="col-auto">
        {avatar && (
          <div className="avatar avatar-sm">
            <img
              alt="avatar"
              className="avatar-img rounded-circle"
              src={avatar}
            />
          </div>
        )}
      </div>
      <div className="col ml--2">
        <div className="small text-muted">
          <strong className="text-body">{title}</strong> {action}
          {subtitle && (
            <blockquote className="text-body">{subtitle}</blockquote>
          )}
        </div>
      </div>
      <div className="col-auto">
        <small className="text-muted">{time}</small>
      </div>
    </div>
  </a>
);

export default UserListItem;
