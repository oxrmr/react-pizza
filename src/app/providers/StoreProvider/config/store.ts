import { configureStore } from "@reduxjs/toolkit";

import { pizzasReducer } from "entities/PizzaItem/model/slice/pizzasSlice";
import type { StoreSchema } from "./StoreSchema";

export const createReduxStore = (initialState?: StoreSchema) => {
  return configureStore({
    preloadedState: initialState,
    reducer: { pizzas: pizzasReducer },
  });
};
