import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./Reducers/ThemeReducer";

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
});

export const AppDispatch = typeof store.dispatch;

export default store;
