import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import history from "./helpers/history";

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
