import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../reducers/rootReducers";
export default function index() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware()],
  });
}
