import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

export interface IStore {
  theme: "dark" | "light";
}

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
