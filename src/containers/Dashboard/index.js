import React, { PureComponent } from "react";
import { Responsive, WidthProvider } from 'react-grid-layout';

import "./styles.css";

import Widget1 from "./Widget1";

const ResponsiveGridLayout = WidthProvider(Responsive);
const layouts = {
  lg: [{ i: "widget1", x: 3, y: 0, w: 6, h: 2 }],
  md: [{ i: "widget1", x: 4, y: 0, w: 8, h: 2 }],
  sm: [{ i: "widget1", x: 0, y: 0, w: 12, h: 2 }]
};

class Dashboard extends PureComponent {
  render() {
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 767, sm: 0 }}
        cols={{ lg: 12, md: 12, sm: 12 }}
      >
        <div key="widget1">
          <Widget1 />
        </div>
      </ResponsiveGridLayout>
    );
  }
}

export default Dashboard;
