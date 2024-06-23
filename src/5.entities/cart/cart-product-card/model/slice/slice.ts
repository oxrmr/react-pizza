import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { CartSchema, OrderItem } from "../types";

const initialState: CartSchema = { orderedItems: [], orderTotalPrice: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<OrderItem>) {
      const item = state.orderedItems.find((item) => item.id === payload.id);
      if (item) {
        item.quantity += 1;
        state.orderTotalPrice = calcTotalPrice(state.orderedItems);
      } else {
        state.orderedItems.push(payload);
        state.orderTotalPrice = calcTotalPrice(state.orderedItems);
      }
    },
    removeItem(state, { payload }: PayloadAction<string>) {
      state.orderedItems = state.orderedItems.filter((item) => item.id !== payload);
      state.orderTotalPrice = calcTotalPrice(state.orderedItems);
    },
    incrementItem(state, { payload }: PayloadAction<string>) {
      const item = state.orderedItems.find((item) => item.id === payload);
      if (item) {
        item.quantity += 1;
        state.orderTotalPrice = calcTotalPrice(state.orderedItems);
      }

      state.orderTotalPrice = calcTotalPrice(state.orderedItems);
    },
    decrementItem(state, { payload }: PayloadAction<string>) {
      const item = state.orderedItems.find((item) => item.id === payload);
      if (item) {
        item.quantity -= 1;
        calcTotalPrice(state.orderedItems);
      }
    },
    clearCart(state) {
      state.orderedItems.length = 0;
      state.orderTotalPrice = 0;
    },
  },
});

export const { reducer: cartReducer } = cartSlice;
export const { actions: cartActions } = cartSlice;

function calcTotalPrice(items: OrderItem[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
