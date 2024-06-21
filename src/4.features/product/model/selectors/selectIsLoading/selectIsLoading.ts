import type { StoreSchema } from "app/providers/store/config/StoreSchema";

export const selectIsLoading = (state: StoreSchema) => state.product.isLoading;
