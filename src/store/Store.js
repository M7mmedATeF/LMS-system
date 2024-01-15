import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./Reducers/ThemeReducer";

const dev_env = process.env.REACT_APP_ENV === "dev";

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
  devTools: dev_env,
});

export const AppDispatch = typeof store.dispatch;

export default store;
