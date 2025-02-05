import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface IInitialCartState {
  totalPrice: number;
  totalQuantity: number;
  cartItems: CartItem[];
}

const initialState: IInitialCartState = {
  totalPrice: 0,
  totalQuantity: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Check if item already exists in cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItemIndex > -1) {
        // If item exists, increase quantity
        state.cartItems[existingItemIndex].quantity += 1;
      } else {
        // If item doesn't exist, add new item with quantity 1
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      // Recalculate total price
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Recalculate total quantity
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      state.cartItems.findIndex((item) => {
        if (item._id === action.payload) {
          item.quantity += 1;
          state.totalPrice += item.price;
        }
      });
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      state.cartItems.findIndex((item) => {
        if (item._id === action.payload) {
          item.quantity -= 1;
          state.totalPrice -= item.price;
        }
      });
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      // Find index of item to remove
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );

      if (existingItemIndex > -1) {
        // If quantity is 1, remove entire item
        if (state.cartItems[existingItemIndex].quantity === 1) {
          state.cartItems.splice(existingItemIndex, 1);
        } else {
          // Decrease quantity
          state.cartItems[existingItemIndex].quantity -= 1;
        }

        // Recalculate total price
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );

        // Recalculate total quantity
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
