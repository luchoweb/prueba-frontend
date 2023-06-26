import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("lang") || "es",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLangAction: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload.toString());
    },
  },
});

export const { changeLangAction } = langSlice.actions;
export default langSlice.reducer;
