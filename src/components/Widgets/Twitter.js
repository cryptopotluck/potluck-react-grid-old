import React, { PureComponent } from "react";
import { Timeline } from "react-twitter-widgets";

import Base from "./Base";

class Twitter extends PureComponent {
  render() {
    return (
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "CPotluck"
        }}
        options={{
          username: "CPotluck",
          height: "100%",
          theme: "dark",
          width: "100%"
        }}
      />
    );
  }
}

export default Base(Twitter);
