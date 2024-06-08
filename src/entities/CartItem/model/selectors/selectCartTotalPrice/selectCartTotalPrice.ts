import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectCartTotalPrice = (state: StoreSchema) => state.cart.totalPrice;
