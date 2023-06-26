import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/langSlice";

export const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});
