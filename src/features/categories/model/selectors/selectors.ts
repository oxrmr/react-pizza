import type { IStoreSchema } from 'app/store';

export const selectCategoryIndex = (state: IStoreSchema) => state.categories.categoryIndex;
