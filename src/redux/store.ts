import { configureStore } from "@reduxjs/toolkit";
import baseApiSlice from "./baseAPI/baseApiSlice";
import { cartReducer } from "./features/cartSlice";
import { enablePOSystemReducer } from "./features/enablePOSystem";
import { orderReducer } from "./features/orderSlice";
import { productReducer } from "./features/product/productFilterSlice";

export const store = configureStore({
  reducer: {
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
    enablePOSystem: enablePOSystemReducer,
    productFilter: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
