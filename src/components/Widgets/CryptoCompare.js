import React, { PureComponent } from "react";

const baseUrl = "https://widgets.cryptocompare.com/";

class CryptoCompare extends PureComponent {
  componentDidMount() {
    let appName = encodeURIComponent(window.location.hostname);
    if (appName === "") appName = "local";

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;

    const theUrl = baseUrl + "serve/v3/coin/header?fsyms=BTC,ETH,BNB&tsyms=USD";
    s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;

    this.ref.parentNode.appendChild(s);
  }

  render() {
    return <span ref={this.setRef} />;
  }

  setRef = node => {
    this.ref = node;
  };
}

export default CryptoCompare;
