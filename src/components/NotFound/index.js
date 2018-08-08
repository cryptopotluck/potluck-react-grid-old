import React from "react";

import "./styles.css";

const NotFound = ({ children }) => (
  <main className="NotFound">
    <div className="row align-items-center" style={{ height: "100vh" }}>
      <div className="col-sm-5 text-right">
        <section>
          <span className="four-oh-four">404</span>
        </section>
      </div>
      <div className="col-sm-7">
        <span>The requested path could not be found</span>
      </div>
    </div>
  </main>
);

export default NotFound;
