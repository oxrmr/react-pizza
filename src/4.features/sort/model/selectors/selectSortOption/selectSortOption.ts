import type { StoreSchema } from "app/providers/store/config/StoreSchema";

export const selectSortOption = (state: StoreSchema) => state.sort.sortOption;
