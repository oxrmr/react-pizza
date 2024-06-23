import type { StoreSchema } from "app/store";

export const selectCartItemQuantity = (id: string) => (state: StoreSchema) => {
  return state.cart.orderedItems.find((item) => {
    return item.id.toString() === id;
  })?.quantity;
};

export const selectCartItems = (state: StoreSchema) => state.cart.orderedItems;

export const selectCartItemsTotal = (state: StoreSchema) => {
  return state.cart.orderedItems.reduce((total, item) => total + item.quantity, 0);
};

export const selectCartTotalPrice = (state: StoreSchema) => state.cart.orderTotalPrice;
