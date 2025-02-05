// productFilterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface IProductFilterState {
  keyword: string;
}

const initialState: IProductFilterState = {
  keyword: "",
};

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    clearKeyword: (state) => {
      state.keyword = "";
    },
  },
});

export const { setKeyword, clearKeyword } = productFilterSlice.actions;
export const productReducer = productFilterSlice.reducer;
