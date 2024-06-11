import type { StoreSchema } from "1.app/providers/StoreProvider/config/StoreSchema";

export const selectCartTotalPrice = (state: StoreSchema) => state.cart.totalPrice;
