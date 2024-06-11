import type { StoreSchema } from "1.app/providers/StoreProvider/config/StoreSchema";

export const selectIsLoading = (state: StoreSchema) => state.pizzas.isLoading;
