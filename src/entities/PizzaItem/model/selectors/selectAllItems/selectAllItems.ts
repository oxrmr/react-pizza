import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectAllItems = (state: StoreSchema) => state.pizzas.items;
