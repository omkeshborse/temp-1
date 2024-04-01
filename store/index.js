import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import wishListReducer from "./slice/wishListSlice";
import productReducer from "./slice/productSlice";

// Define your custom middleware function
const logger = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  return next(action);
};

// Pass your middleware function to the configureStore call
const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware: [logger], // Pass the middleware function here
});

export default store;
