import type { StoreSchema } from "app/providers/store/config/StoreSchema";

export const selectCartItemQuantity = (id: string) => (state: StoreSchema) => {
  return state.cart.items.find((item) => {
    return item.id.toString() === id;
  })?.quantity;
};
