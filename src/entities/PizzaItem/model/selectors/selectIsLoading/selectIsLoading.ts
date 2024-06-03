import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectIsLoading = (state: StoreSchema) => state.pizzas.isLoading;
