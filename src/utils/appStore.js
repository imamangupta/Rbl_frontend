import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const appStore = configureStore({
    reducer: {
        product: productSlice,
        // cart: cartSlice,
    }
});

export default appStore;