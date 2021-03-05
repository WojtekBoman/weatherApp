import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../reducers";

export const configureStore = () => {
  return createStore(reducers, applyMiddleware(reduxThunk));
};
