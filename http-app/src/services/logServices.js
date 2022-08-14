import Raven from "raven-js";

function init() {
  Raven.config(
    "https://9a2131570b974574b662b44d8086998c@o1359733.ingest.sentry.io/6647482"
  ).install();
}

function log(error) {
  Raven.captureExeception(error);
}

export default {
  init,
  log,
};
