import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./ducks";

const middleware = applyMiddleware(
  thunk,
  createLogger({
    collapsed: true
  })
);

const store = createStore(reducer, middleware);

export default store;
