import { combineReducers, configureStore } from '@reduxjs/toolkit';

import type { IStoreSchema } from '../model/types';

import { cartReducer } from 'entities/cart/cart-product-card';
import { productReducer } from 'entities/product/product-card';
import { categoriesReducer } from 'features/categories/model/slice/categoriesSlice';
import { sortReducer } from 'features/sort/model/slice/sortSlice';

export const rootReducer = combineReducers({
  product: productReducer,
  categories: categoriesReducer,
  sort: sortReducer,
  cart: cartReducer,
});

export const createReduxStore = (preloadedState?: Partial<IStoreSchema>) => {
  return configureStore({
    preloadedState,
    reducer: rootReducer,
  });
};
