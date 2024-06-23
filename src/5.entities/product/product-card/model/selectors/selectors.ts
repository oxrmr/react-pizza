import type { StoreSchema } from "app/store";

export const selectProductsError = (state: StoreSchema) => state.product.error;

export const selectProductsLoading = (state: StoreSchema) => state.product.isLoading;

export const selectProducts = (state: StoreSchema) => state.product.items;
