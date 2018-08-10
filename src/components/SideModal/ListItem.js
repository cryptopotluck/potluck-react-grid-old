import React, { Fragment } from "react";

const ListItem = ({ avatar, href, status, time, title }) => (
  <a className="list-group-item px-0" href={href}>
    <div className="row align-items-center">
      <div className="col-auto">
        {avatar && (
          <div className="avatar">
            <img
              src={avatar}
              alt="avatar"
              className="avatar-img rounded-circle"
            />
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
              <span className="text-success">●</span> {status}
            </span>
          )}
        </p>
      </div>
      <div className="col-auto">
        <a href="#!" className="btn btn-sm btn-white">
          <b>
            Battle <i className="fab fa-fort-awesome-alt" /> Station
          </b>
        </a>
      </div>
    </div>
  </a>
);

export default ListItem;
