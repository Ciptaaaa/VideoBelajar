import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/slice";

const store = configureStore({
  reducer: { products: cartReducer },
});

export default store;
