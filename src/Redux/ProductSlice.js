import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  initialState,
  name: "ProductSlice",
  reducers: {
    saveProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProduct: (state, action) => {
      const products = [...state.products];
      const indexOfProduct = products.findIndex(
        (item) => item.id === action.payload.id
      );
      products.splice(indexOfProduct, 1, action.payload);
      state.products = products;
    },
    removeProduct: (state, action) => {
      const products = [...state.products];
      const indexOfProduct = products.findIndex(
        (item) => item.id === action.payload.id
      );
      products.splice(indexOfProduct, 1);
      state.products = products;
    },
    addNewProduct: (state, action) => {
      const products = [...state.products];

      products.push(action.payload);
      state.products = products;
    },
  },
});

export const { saveProducts, updateProduct, removeProduct, addNewProduct } =
  ProductSlice.actions;
export default ProductSlice.reducer;
export const productSelector = (state) => state.productSlice;
