import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  heading: "",
  paragraph: "",
  func: () => {},
};

const modalSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    makeInvisible: (state) => {
      state.visible = false;
    },
    setModal: (state, action) => {
      return {
        ...state,
        visible: true,
        heading: action.payload.heading,
        paragraph: action.payload.paragraph,
        func: action.payload.func,
      };
    },
  },
});

export const { makeInvisible, setModal } = modalSlice.actions;

export default modalSlice.reducer;
