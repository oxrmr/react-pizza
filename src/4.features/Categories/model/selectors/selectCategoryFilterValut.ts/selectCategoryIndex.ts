import type { StoreSchema } from "1.app/providers/StoreProvider/config/StoreSchema";

export const selectCategoryIndex = (state: StoreSchema) => state.category.categoryValue;
