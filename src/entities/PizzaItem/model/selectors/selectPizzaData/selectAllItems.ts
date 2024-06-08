import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectPizzaData = (state: StoreSchema) => state.pizzas.items;
