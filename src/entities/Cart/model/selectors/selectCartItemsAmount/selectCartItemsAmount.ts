import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectCartItemsAmount = (state: StoreSchema) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};
