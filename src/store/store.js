import { configureStore } from "@reduxjs/toolkit";
import analyticsReducer from "./analyticsSlice";

const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
  },
});

export default store;
