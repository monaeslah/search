import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./features/reducers";

const middleware = [thunk];

export const store = createStore(
  reducers,
  {},
  applyMiddleware(...middleware),
  {}
);
