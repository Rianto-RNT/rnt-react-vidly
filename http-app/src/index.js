import React from "react";
import ReactDOM from "react-dom";
import Raven from "raven-js";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";

Raven.config(
  "https://9a2131570b974574b662b44d8086998c@o1359733.ingest.sentry.io/6647482"
).install();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
