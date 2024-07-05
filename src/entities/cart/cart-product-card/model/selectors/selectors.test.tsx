import type { IStoreSchema } from 'app/store';
import { expect, it } from 'vitest';
import { selectCartItems, selectCartItemsTotal, selectCartTotalPrice } from './selectors';

const state = {
  cart: {},
} as IStoreSchema;

it('returns cart total price', () => {
  state.cart.totalPrice = 1;
  expect(selectCartTotalPrice(state)).toEqual(1);
});

it('returns number of total items in cart', () => {
  state.cart.items = [
    {
      id: 's',
      imageUrl: 's',
      price: 1,
      size: 12,
      title: 'title',
      type: 'k',
      quantity: 1,
    },
  ];
  expect(selectCartItemsTotal(state)).toBe(1);
});

it('returns an array of all items in cart', () => {
  expect(selectCartItems(state)).toEqual(state.cart.items);
});
