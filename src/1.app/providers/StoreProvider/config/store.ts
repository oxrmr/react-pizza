import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "entities/CartPizzaItem/model/slice/cartSlice";
import { pizzaItemReducer } from "entities/PizzaItem/model/slice/pizzaItemSlice";
import { categoryReducer } from "features/Categories/model/slice/categorySlice";
import { sortByReducer } from "features/SortBy/model/slice/sortBySlice";
import type { StoreSchema } from "./StoreSchema";

export const createReduxStore = (initialState?: StoreSchema) => {
  return configureStore({
    preloadedState: initialState,
    reducer: {
      pizzas: pizzaItemReducer,
      category: categoryReducer,
      sortBy: sortByReducer,
      cart: cartReducer,
    },
  });
};
