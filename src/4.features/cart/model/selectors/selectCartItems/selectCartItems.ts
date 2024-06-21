import type { StoreSchema } from "app/providers/store/config/StoreSchema";

export const selectCartItems = (state: StoreSchema) => state.cart.items;
