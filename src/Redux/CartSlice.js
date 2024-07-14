import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addProductInCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const cartItems = [...state.cartItems];
      const indexOfProduct = cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      cartItems.splice(indexOfProduct, 1);
      state.cartItems = cartItems;
    },
  },
});

export const { addProductInCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export const cartSelector = (state) => state.cartSlice;
