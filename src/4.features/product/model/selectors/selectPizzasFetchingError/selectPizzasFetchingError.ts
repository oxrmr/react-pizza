import type { StoreSchema } from "app/providers/store/config/StoreSchema";

export const selectPizzasFetchingError = (state: StoreSchema) => state.product.error;
