import type { StoreSchema } from "app/providers/store/config/StoreSchema";

export const selectCartTotalPrice = (state: StoreSchema) => state.cart.totalPrice;
