import React from "react";
import ReactDOM from "react-dom";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./store/reducers/counter.js";
import resultReducer from "./store/reducers/results.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  results: resultReducer,
});

const store = createStore(rootReducer);

const initStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(initStore, document.getElementById("root"));
registerServiceWorker();
