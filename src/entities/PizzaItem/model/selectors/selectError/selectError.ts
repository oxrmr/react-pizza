import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectError = (state: StoreSchema) => state.pizzas.error;
