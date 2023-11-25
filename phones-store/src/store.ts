import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from "./features/phoneSlice";
import modalSlice from "./features/modalSlice";

const store = configureStore({
  reducer: {
    phones: phoneSlice,
    modal: modalSlice,
  },
});

export default store;
