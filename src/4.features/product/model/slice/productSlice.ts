import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "../thunks/fetchPizzas";
import type { ProductSchema } from "../types";

const initialState: ProductSchema = {
  items: [],
  isLoading: false,
  error: "",
};

const pizzaItemSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPizzas.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = JSON.stringify(action);
          state.isLoading = false;
        }
      );
  },
});

export const { reducer: productReducer } = pizzaItemSlice;
