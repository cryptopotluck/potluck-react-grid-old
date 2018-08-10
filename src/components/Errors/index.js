import React, { PureComponent } from "react";
import { chain, map } from "lodash";

class Errors extends PureComponent {
  render() {
    return <span>{this.toText()}</span>;
  }

  toText = () => {
    const { errors } = this.props;

    return chain(errors)
      .map(error => {
        return typeof error === "string"
          ? error
          : map(error.detail, (v, k) => {
              return `${k} ${v}`;
            });
      })
      .flatten()
      .value()
      .join(", ");
  };
}

export default Errors;
