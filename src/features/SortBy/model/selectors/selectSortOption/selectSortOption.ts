import type { StoreSchema } from "app/providers/StoreProvider/config/StoreSchema";

export const selectSortOption = (state: StoreSchema) => state.sortBy.sortOption;
