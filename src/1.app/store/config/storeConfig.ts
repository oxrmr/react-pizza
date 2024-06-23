import { configureStore } from "@reduxjs/toolkit";

import type { StoreSchema } from "../model/types";

import { cartReducer } from "entities/cart/cart-product-card";
import { productReducer } from "entities/product/product-card";
import { categoriesReducer } from "features/categories/model/slice/categoriesSlice";
import { sortReducer } from "features/sort/model/slice/sortSlice";

export const createReduxStore = (initialState?: StoreSchema) => {
  return configureStore({
    preloadedState: initialState,
    reducer: {
      product: productReducer,
      categories: categoriesReducer,
      sort: sortReducer,
      cart: cartReducer,
    },
  });
};

export const store = createReduxStore();
