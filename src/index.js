import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./common/css/theme.css";
import "./common/css/custom.css";
import "./common/fonts/feather/feather.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
