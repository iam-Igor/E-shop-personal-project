import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/reducers";

const store = configureStore({
  reducer: mainReducer,
});

export default store;
