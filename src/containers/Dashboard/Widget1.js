import React, { PureComponent } from "react";
import TradingViewWidget from "react-tradingview-widget";

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

class Widget1 extends PureComponent {
  render() {
    return (
      <div style={{ padding: "15px 10px", height: "100%" }}>
        <TradingViewWidget {...opts} />
      </div>
    );
  }
}

export default Widget1;
