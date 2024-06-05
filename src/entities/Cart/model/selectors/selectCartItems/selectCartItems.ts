import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectCartItems = (state: StoreSchema) => state.cart.items;
