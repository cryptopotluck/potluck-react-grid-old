import React, { PureComponent } from "react";

import "./styles.css";

const Base = Comp =>
  class extends PureComponent {
    render() {
      const { paddingTop, ...rest } = this.props;
      return (
        <div
          className="BaseWidget"
          style={{
            display: "flex",
            padding: "7px 5px",
            height: "100%",
            overflow: "scroll",
            paddingTop: paddingTop
          }}
        >
          <Comp {...rest} />
        </div>
      );
    }
  };

export default Base;
