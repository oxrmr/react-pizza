import type { StoreSchema } from "app/store";

export const selectCategoryIndex = (state: StoreSchema) => state.categories.categoryIndex;
