import { createSlice } from "@reduxjs/toolkit";
const LOCAL_NAME = "theme";

const themeSlice = createSlice({
  name: "theme",
  initialState: localStorage.getItem(LOCAL_NAME)
    ? JSON.parse(localStorage.getItem(LOCAL_NAME) as string)
    : "light",
  reducers: {
    toggleTheme: (state) => {
      const temp = state === "light" ? "dark" : "light";
      localStorage.setItem(LOCAL_NAME, JSON.stringify(temp));
      return temp;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
