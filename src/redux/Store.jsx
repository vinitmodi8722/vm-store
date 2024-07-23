import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
 