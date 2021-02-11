import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import reducer from "./store/reducer.js";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducer);

console.log(store);

const initStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(initStore, document.getElementById("root"));
registerServiceWorker();
