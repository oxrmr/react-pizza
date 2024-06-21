import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "entities/cart/CartItem/lib/calcTotalPrice";
import type { CartSchema } from "../types";
import type { OrderedProduct } from "entities/cart/CartItem";

const initialState: CartSchema = { items: [], totalPrice: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<OrderedProduct>) {
      const item = state.items.find((item) => item.id === payload.id);
      if (item) {
        item.quantity += 1;
        state.totalPrice = calcTotalPrice(state.items);
      } else {
        state.items.push(payload);
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    removeItem(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    incrementItem(state, { payload }: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice = calcTotalPrice(state.items);
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    decrementItem(state, { payload }: PayloadAction<string>) {
      const item = state.items.find((item) => item.id === payload);
      if (item) {
        item.quantity -= 1;
        calcTotalPrice(state.items);
      }
    },
    clearCart(state) {
      state.items.length = 0;
      state.totalPrice = 0;
    },
  },
});

export const { reducer: cartReducer } = cartSlice;
export const { actions: cartActions } = cartSlice;
