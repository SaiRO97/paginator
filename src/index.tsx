import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import paginatorStore from "./stores/paginator";

import "./index.css";

ReactDOM.render(
  <Provider stores={paginatorStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
