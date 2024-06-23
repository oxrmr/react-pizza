import type { StoreSchema } from "app/store";

export const selectSortOption = (state: StoreSchema) => state.sort.sortOption;
