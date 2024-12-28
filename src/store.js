import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./components/productSlice";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
