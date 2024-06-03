import { createSlice } from "@reduxjs/toolkit";
import type { SortyBySchema } from "./types";

const initialState: SortyBySchema = { sortOption: "" };

const sortBySlice = createSlice({
  name: "sortBy",
  initialState,
  reducers: {
    setSortOption(state, action) {
      state.sortOption = action.payload;
    },
  },
});

export const { reducer: sortyByReducer } = sortBySlice;
export const { actions: sortByAction } = sortBySlice;
