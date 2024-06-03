import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "../thunks/fetchPizzas";
import type { PizzasSchema } from "./types";

const initialState: PizzasSchema = {
  items: [],
  isLoading: false,
  error: "",
};

const pizzasSlice = createSlice({
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
        (state) => {
          state.error = "error";
          state.isLoading = false;
        }
      );
  },
});

export const { reducer: pizzasReducer } = pizzasSlice;
