import type { IStoreSchema } from 'app/store';

export const selectCartItemsData = (state: IStoreSchema) => state.cart.items;

export const selectCartTotalPrice = (state: IStoreSchema) => state.cart.totalPrice;

export const selectCartItemsTotal = (state: IStoreSchema) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};
