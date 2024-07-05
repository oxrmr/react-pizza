import type { IStoreSchema } from 'app/store';

export const selectSortOption = (state: IStoreSchema) => state.sort.sortOption;
