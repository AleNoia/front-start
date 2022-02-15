import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: localStorage.getItem("REACT_APP_THEME") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    update: (state, { payload }) => {
      localStorage.setItem("REACT_APP_THEME", payload);
      return {
        ...state,
        type: payload,
      };
    },
  },
});

export const { update } = themeSlice.actions;

export default themeSlice.reducer;
