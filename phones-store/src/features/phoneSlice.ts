import { createSlice } from "@reduxjs/toolkit";
import { phoneType } from "../types/phoneType";

const initialState: phoneType[] = [
  {
    id: "1",
    img: "https://www.cnet.com/a/img/resize/82e8fc361d244ca2fd7499a0f4a4b6c54c7dfa24/hub/2017/04/15/640ef291-de7e-4a10-979c-01ecebdf7486/gsocho-8879-043.jpg?auto=webp&fit=crop&height=1200&width=1200",
    name: "Samsung Galaxy S8",
    amount: 399.99,
    quantity: 0,
  },
  {
    id: "2",
    img: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-11/mimg03.jpg",
    name: "Redmi Note 11",
    amount: 199.99,
    quantity: 0,
  },
];

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    removePhone: (state, action) =>
      state.filter((phone) => phone.id !== action.payload.id),
    incrementAmount: (state, action) => {
      const currentPhone = state.find(
        (phone) => phone.id === action.payload.id
      );
      currentPhone!.quantity++;
    },
    decrementAmount: (state, action) => {
      const currentPhone = state.find(
        (phone) => phone.id === action.payload.id
      );
      if (currentPhone!.quantity > 0) currentPhone!.quantity--;
    },
    clearAll: () => {
      return [];
    },
  },
});

export const { removePhone, incrementAmount, decrementAmount, clearAll } =
  phoneSlice.actions;

export default phoneSlice.reducer;
