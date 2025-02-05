import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counterSlice";
import { enablePOSystemReducer } from "./features/enablePOSystem";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    enablePOSystem: enablePOSystemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
