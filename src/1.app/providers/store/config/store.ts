import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "features/cart/model/slice/cartSlice";
import { categoriesReducer } from "features/categories/model/slice/categoriesSlice";
import { productReducer } from "features/product/model/slice/productSlice";
import { sortReducer } from "features/sort/model/slice/sortSlice";
import type { StoreSchema } from "./StoreSchema";

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
