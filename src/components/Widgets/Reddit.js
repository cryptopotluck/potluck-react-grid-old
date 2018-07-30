import React, { PureComponent } from "react";

import Base from "./Base";

class Reddit extends PureComponent {
  render() {
    return (
      <div>
        <iframe
          allowtransparency="true"
          frameBorder="0"
          width="100%"
          height="100%"
          scrolling="auto"
          src="https://js4.red/r/CryptoCurrency"
          title="Reddit"
          style={{ width: "100%", border: "none" }}
        />
      </div>
    );
  }
}

export default Base(Reddit);
