import { createSlice } from "@reduxjs/toolkit";

const Theme = createSlice({
  name: "theme",
  initialState: false,
  reducers: {
    toggleTheme: (state) => {
      return !state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = Theme.actions;

export default Theme.reducer;
