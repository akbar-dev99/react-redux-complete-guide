import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./store/reducers/counter.js";
import resultReducer from "./store/reducers/results.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  results: resultReducer,
});

const logger = store => {
  return next => {
    return action => {
      console.log("[middleware] dispatching", action);
      const result = next(action);
      console.log("[middleware] next state ", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

const initStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(initStore, document.getElementById("root"));
registerServiceWorker();
