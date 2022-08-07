import { configureStore } from "@reduxjs/toolkit";
import darkMode from "../reducers/darkMode";
export const store = configureStore({
  reducer: {
    theme: darkMode,
  },
});
