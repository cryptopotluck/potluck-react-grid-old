import React, { Fragment } from "react";

const ListItem = ({ avatar, href, status, time, title }) => (
  <a className="list-group-item px-0" href={href}>
    <div className="row align-items-center">
      <div className="col-auto">
        {avatar && (
          <div className="avatar">
            <img src={avatar} alt="avatar" className="avatar-img rounded" />
          </div>
        )}
      </div>
      <div className="col ml--2">
        <h4 className="text-body mb-1 name">{title}</h4>
        <p className="small text-muted mb-0">
          {time && (
            <Fragment>
              <span className="fe fe-clock" />{" "}
              <time dateTime="2018-05-24">{time}</time>
            </Fragment>
          )}
          {status && (
            <span>
              <span className="text-primary">●</span> {status}
            </span>
          )}
        </p>
      </div>
    </div>
  </a>
);

export default ListItem;
