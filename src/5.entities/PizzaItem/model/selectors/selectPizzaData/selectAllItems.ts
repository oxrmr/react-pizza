import type { StoreSchema } from "1.app/providers/StoreProvider/config/StoreSchema";

export const selectPizzaData = (state: StoreSchema) => state.pizzas.items;
