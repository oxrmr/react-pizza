import { createSlice } from "@reduxjs/toolkit";
import type { SortSchema } from "./types";

const initialState: SortSchema = { sortOption: "" };

const sortSlice = createSlice({
  name: "sortBy",
  initialState,
  reducers: {
    setSortOption(state, action) {
      state.sortOption = action.payload;
    },
  },
});

export const { reducer: sortReducer } = sortSlice;
export const { actions: sortAction } = sortSlice;
