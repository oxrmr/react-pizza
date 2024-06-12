import type { StoreSchema } from "1.app/providers/StoreProvider/config/StoreSchema";

export const selectCartItemQuantity = (id: string) => (state: StoreSchema) => {
  return state.cart.items.find((item) => {
    return item.id.toString() === id;
  })?.quantity;
};
