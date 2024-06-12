import type { StoreSchema } from "1.app/providers/StoreProvider/config/StoreSchema";

export const selectCartItems = (state: StoreSchema) => state.cart.items;
