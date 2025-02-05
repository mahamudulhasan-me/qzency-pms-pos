import { configureStore } from "@reduxjs/toolkit";
import baseApiSlice from "./baseAPI/baseApiSlice";
import { enablePOSystemReducer } from "./features/enablePOSystem";
import { productReducer } from "./product/productFilterSlice";

export const store = configureStore({
  reducer: {
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
    enablePOSystem: enablePOSystemReducer,
    productFilter: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
