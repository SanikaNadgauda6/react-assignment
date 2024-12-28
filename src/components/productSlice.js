import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.products = [...action.payload];
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setInitialState, addProduct } = productSlice.actions;
export default productSlice.reducer;

export const productSelector = (state) => state.product.products;
