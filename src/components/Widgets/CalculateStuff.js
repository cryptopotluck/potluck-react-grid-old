import React, { PureComponent } from "react";

import Base from "./Base";

class CalculateStuff extends PureComponent {
  render() {
    return (
      <div>
        <iframe
          allowtransparency="true"
          frameBorder="0"
          height="200"
          id="25239ca13277"
          scrolling="no"
          src="https://widgets.calculatestuff.com/?token=25239ca13277"
          title="Calculate Stuff"
          style={{ width: "100%", border: "none" }}
        />
      </div>
    );
  }
}

export default Base(CalculateStuff);
