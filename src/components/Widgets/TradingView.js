import React, { PureComponent, Fragment } from "react";
import TradingViewWidget from "react-tradingview-widget";

import Base from "./Base";
import CryptoCompare from "./CryptoCompare";

const opts = {
  symbol: "COINBASE:BTCUSD",
  interval: "D",
  timezone: "Etc/UTC",
  theme: "Dark",
  style: "1",
  enable_publishing: false,
  toolbar_bg: "#f1f3f6",
  withdateranges: true,
  hide_side_toolbar: false,
  allow_symbol_change: true,
  save_image: false,
  studies: [
    "ROC@tv-basicstudies",
    "StochasticRSI@tv-basicstudies",
    "MASimple@tv-basicstudies"
  ],
  show_popup_button: true,
  popup_width: "1000",
  popup_height: "650",
  locale: "en",
  autosize: true
};

class TradingView extends PureComponent {
  render() {
    return (
      <Fragment>
        <CryptoCompare />
        <TradingViewWidget {...opts} />
      </Fragment>
    );
  }
}

export default Base(TradingView);
