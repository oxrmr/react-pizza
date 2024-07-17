import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { calcTotalPrice } from '../../lib/calcTotalPrice';
import type { ICartItem, ICartSchema } from '../types';

const initialState: ICartSchema = { items: [], totalPrice: 0 };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<ICartItem>) {
      const item = state.items.find(item => item.id === payload.id);
      if (item) {
        item.quantity += 1;
        state.totalPrice = calcTotalPrice(state.items);
      } else {
        state.items.push(payload);
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    incrementItem(state, { payload }) {
      const item = state.items.find(item => item.id === payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    decrementItem(state, { payload }) {
      const item = state.items.find(item => item.id === payload);
      if (item) {
        item.quantity -= 1;
        state.totalPrice = calcTotalPrice(state.items);
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
