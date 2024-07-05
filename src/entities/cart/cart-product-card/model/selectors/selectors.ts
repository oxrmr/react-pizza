import type { IStoreSchema } from 'app/store';

export const selectCartItems = (state: IStoreSchema) => state.cart.items;

export const selectCartItemsTotal = (state: IStoreSchema) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const selectCartTotalPrice = (state: IStoreSchema) => state.cart.totalPrice;
