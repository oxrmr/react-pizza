import type { StoreSchema } from "app/providers/store/config/StoreSchema";

export const selectCartItemsQuantity = (state: StoreSchema) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};
