import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItemProps } from "entities/CartPizzaItem/ui/CartPizzaItem";
import type { CartSchema } from "../types";

const initialState: CartSchema = { items: [], totalPrice: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<CartItemProps>) {
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

function calcTotalPrice(items: CartItemProps[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
