import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light",
};

export const darkMode = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      console.log(state.value);
      if (state.value === "light") {
        localStorage.setItem("theme", "dark");
        state.value = "dark";
      } else {
        localStorage.setItem("theme", "light");
        state.value = "light";
      }
    },
    setDarkMode: (state, value) => {
      state.value = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode, setDarkMode } = darkMode.actions;

export default darkMode.reducer;
