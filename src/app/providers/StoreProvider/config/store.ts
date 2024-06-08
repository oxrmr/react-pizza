import { configureStore } from "@reduxjs/toolkit";

import { pizzasReducer } from "entities/PizzaItem/model/slice/pizzasSlice";
import { categoryReducer } from "features/Categories/model/slice/categorySlice";
import { sortyByReducer } from "features/SortBy/model/slice/sortBySlice";
import type { StoreSchema } from "./StoreSchema";
import { cartReducer } from "entities/CartItem/model/slice/cartSlice";

export const createReduxStore = (initialState?: StoreSchema) => {
  return configureStore({
    preloadedState: initialState,
    reducer: {
      pizzas: pizzasReducer,
      category: categoryReducer,
      sortBy: sortyByReducer,
      cart: cartReducer,
    },
  });
};
