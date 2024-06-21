import type { StoreSchema } from "app/providers/store/config/StoreSchema";

export const selectPizzaData = (state: StoreSchema) => state.product.items;
