import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectCategoryIndex = (state: StoreSchema) =>
  state.category.categoryValue;
