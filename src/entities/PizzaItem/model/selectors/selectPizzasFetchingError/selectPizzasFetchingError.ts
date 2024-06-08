import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectPizzasFetchingError = (state: StoreSchema) => state.pizzas.error;
