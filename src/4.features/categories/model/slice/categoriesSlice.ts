import { createSlice } from "@reduxjs/toolkit";
import type { CategoriesSchema } from "./types";

const initialState: CategoriesSchema = { categoryIndex: 0 };

export const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryIndex = action.payload;
    },
  },
});

export const { reducer: categoriesReducer } = categoriesSlice;
export const { actions: categoriesActions } = categoriesSlice;
