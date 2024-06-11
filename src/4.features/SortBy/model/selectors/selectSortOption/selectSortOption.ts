import type { StoreSchema } from "1.app/providers/StoreProvider/config/StoreSchema";

export const selectSortOption = (state: StoreSchema) => state.sortBy.sortOption;
