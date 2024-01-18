import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action);
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decrementItem: (state, action) => {
      console.log(action);
      console.log(action.payload);
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart,decrementItem } = cartSlice.actions;

export default cartSlice.reducer;
