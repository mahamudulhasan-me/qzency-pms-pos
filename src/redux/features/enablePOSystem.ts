import { createSlice } from "@reduxjs/toolkit";

interface IEnablePOSystem {
  isEnabled: boolean;
}

const initialState: IEnablePOSystem = {
  isEnabled: false,
};

const enablePOSystemSlice = createSlice({
  name: "enablePOSystem",
  initialState,
  reducers: {
    enablePOSystem: (state) => {
      state.isEnabled = true;
    },
    disablePOSystem: (state) => {
      state.isEnabled = false;
    },
  },
});

export const { enablePOSystem, disablePOSystem } = enablePOSystemSlice.actions;
export const enablePOSystemReducer = enablePOSystemSlice.reducer;
