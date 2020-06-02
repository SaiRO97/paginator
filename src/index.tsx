import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import paginatorStore from "./stores";

import "./index.css";

ReactDOM.render(
  <Provider stores={paginatorStore}>
    <App PaginatorStore={paginatorStore} />
  </Provider>,
  document.getElementById("root")
);
