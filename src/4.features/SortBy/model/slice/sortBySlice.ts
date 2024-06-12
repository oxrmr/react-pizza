import { createSlice } from "@reduxjs/toolkit";
import type { SortBySchema } from "./types";

const initialState: SortBySchema = { sortOption: "" };

const sortBySlice = createSlice({
  name: "sortBy",
  initialState,
  reducers: {
    setSortOption(state, action) {
      state.sortOption = action.payload;
    },
  },
});

export const { reducer: sortByReducer } = sortBySlice;
export const { actions: sortByAction } = sortBySlice;
