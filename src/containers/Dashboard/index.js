import React, { PureComponent } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import "./styles.css";

import CalculateStuff from "../../components/Widgets/CalculateStuff";
import Reddit from "../../components/Widgets/Reddit";
import SteemitProfile from "../../components/Widgets/SteemitProfile";
import SteemitTrending from "../../components/Widgets/SteemitTrending";
import TradingView from "../../components/Widgets/TradingView";
import Twitter from "../../components/Widgets/Twitter";

const defaults = { x: 0, y: 1, w: 12, h: 1, minH: 1 };
const sidebarWidth = 250;

const ResponsiveGridLayout = WidthProvider(Responsive);
const layouts = {
  lg: [
    { ...defaults, i: "steemitTrending", x: 0, y: 0, w: 4, h: 4 },
    { ...defaults, i: "reddit", x: 4, y: 0, w: 4, h: 4 },
    { ...defaults, i: "tradingView", x: 8, y: 0, w: 9, h: 2 },
    { ...defaults, i: "twitter", x: 8, y: 2, w: 4, h: 2 },
    { ...defaults, i: "calculateStuff", x: 12, y: 2, w: 5 },
    { ...defaults, i: "steemitProfile", x: 12, y: 3, w: 4 }
  ],
  md: [
    { ...defaults, i: "twitter", h: 2 },
    { ...defaults, i: "reddit", h: 2 },
    { ...defaults, i: "tradingView", h: 2 },
    { ...defaults, i: "calculateStuff" },
    { ...defaults, i: "steemitProfile" },
    { ...defaults, i: "steemitTrending" }
  ],
  sm: [
    { ...defaults, i: "twitter", h: 2 },
    { ...defaults, i: "reddit", h: 2 },
    { ...defaults, i: "tradingView", h: 2 },
    { ...defaults, i: "calculateStuff" },
    { ...defaults, i: "steemitProfile" },
    { ...defaults, i: "steemitTrending" }
  ]
};

class Dashboard extends PureComponent {
  render() {
    return (
      <ResponsiveGridLayout
        className="layout"
        margin={[3, 3]}
        layouts={layouts}
        rowHeight={235}
        breakpoints={{ lg: 1200 - sidebarWidth, md: 767 - sidebarWidth, sm: 0 }}
        cols={{ lg: 17, md: 12, sm: 12 }}
      >
        <div key="tradingView">
          <TradingView paddingTop={18} />
        </div>
        <div key="calculateStuff">
          <CalculateStuff />
        </div>
        <div key="steemitProfile">
          <SteemitProfile />
        </div>
        <div key="steemitTrending">
          <SteemitTrending />
        </div>
        <div key="twitter">
          <Twitter />
        </div>
        <div key="reddit">
          <Reddit />
        </div>
      </ResponsiveGridLayout>
    );
  }
}

export default Dashboard;
