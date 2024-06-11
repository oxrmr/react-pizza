import { createSlice } from "@reduxjs/toolkit";
import type { CategorySchema } from "./types";

const initialState: CategorySchema = { categoryValue: 0 };

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryValue = action.payload;
    },
  },
});

export const { reducer: categoryReducer } = categorySlice;
export const { actions: categoryActions } = categorySlice;
