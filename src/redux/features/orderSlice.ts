import { createSlice } from "@reduxjs/toolkit";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface IOrderInitialState {
  orderSuccess: boolean;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  subtotal: number;
  taxes: number;
  discount: number;
  finalPrice: number;
  products: any[];
}

const initialState: IOrderInitialState = {
  orderSuccess: false,
  name: "Mahamudul Hasan",
  email: "mahamudulhasan.org@gmail.com",
  address: "House-09, Road-01, Sector-15, Uttara, Dhaka",
  phoneNumber: "+8801710648088",
  subtotal: 0,
  taxes: 0,
  discount: 0,
  finalPrice: 0,
  products: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      const { subtotal, finalPrice, taxes, discount, products } =
        action.payload;
      state.orderSuccess = true;
      state.subtotal = subtotal;
      state.taxes = taxes;
      state.finalPrice = finalPrice;
      state.discount = discount;
      state.products = products;
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
