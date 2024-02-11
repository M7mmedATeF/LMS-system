import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./Reducers/ThemeReducer";
import LangReducer from "./Reducers/LangReducer";
import Leaderboard from "./Reducers/boardReducer";
import Courses from "./Reducers/Courses";

const dev_env = process.env.REACT_APP_ENV === "dev";

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        lang: LangReducer,
        board: Leaderboard,
        courses: Courses,
    },
    devTools: dev_env,
});

export const AppDispatch = typeof store.dispatch;

export default store;
