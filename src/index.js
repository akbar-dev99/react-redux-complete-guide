import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { reducer } from "./store/reducer";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

const store = createStore();

const initStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(initStore, document.getElementById("root"));
registerServiceWorker();
