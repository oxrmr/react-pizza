import type { StoreSchema } from "app/providers/store/config/StoreSchema";

export const selectCategoryIndex = (state: StoreSchema) => state.categories.categoryIndex;
