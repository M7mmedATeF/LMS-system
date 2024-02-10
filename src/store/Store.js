import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./Reducers/ThemeReducer";
import LangReducer from "./Reducers/LangReducer";
import Leaderboard from "./Reducers/boardReducer";

const dev_env = process.env.REACT_APP_ENV === "dev";

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        lang: LangReducer,
        board: Leaderboard,
    },
    devTools: dev_env,
});

export const AppDispatch = typeof store.dispatch;

export default store;
