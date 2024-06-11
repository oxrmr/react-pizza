import type { StoreSchema } from "1.app/providers/StoreProvider/config/StoreSchema";

export const selectPizzasFetchingError = (state: StoreSchema) => state.pizzas.error;
