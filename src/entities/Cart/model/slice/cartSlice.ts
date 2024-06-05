import { createSlice } from "@reduxjs/toolkit";
import type { Pizza } from "entities/PizzaItem/ui/PizzaItem";
import type { CartSchema } from "./CartSchema";

const initialState: CartSchema = { items: [], totalPrice: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const item = state.items.find((item) => item.id === payload.id);
      if (item) {
        item.quantity += 1;
        state.totalPrice = calcTotalPrice(state.items);
      } else {
        state.items.push(payload);
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter((item) => item.id !== payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearCart(state) {
      state.items.length = 0;
      state.totalPrice = 0;
    },
    increaseByOne(state, { payload }) {
      state.items.map((item) => (item.id !== payload ? item : item.quantity + 1));
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const { reducer: cartReducer } = cartSlice;
export const { actions: cartActions } = cartSlice;

function calcTotalPrice(items: Pizza[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
