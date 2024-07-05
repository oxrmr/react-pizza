import type { IStoreSchema } from 'app/store';

export const selectProducts = (state: IStoreSchema) => state.product.items;

export const selectProductsError = (state: IStoreSchema) => state.product.error;

export const selectProductsFetchStatus = (state: IStoreSchema) => state.product.status;
