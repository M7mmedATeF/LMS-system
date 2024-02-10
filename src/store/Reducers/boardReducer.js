import { createSlice } from "@reduxjs/toolkit";

export const board = [
    {
        id: 1,
        name: "Mohammed Atef Ewais",
        points: 250,
    },
    {
        id: 2,
        name: "Mohammed Atef Ewais",
        points: 200,
    },
    {
        id: 3,
        name: "Asmaa Atef Ewais",
        points: 100,
    },
    {
        id: 5,
        name: "Asmaa Atef Ewais",
        points: 100,
    },
    {
        id: 6,
        name: "Asmaa Atef Ewais",
        points: 100,
    },
];

const Leaderboard = createSlice({
    name: "leaderboard",
    initialState: board,
    reducers: {
        setBoard: (_, actions) => {
            return actions.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeLang } = Leaderboard.actions;

export default Leaderboard.reducer;
