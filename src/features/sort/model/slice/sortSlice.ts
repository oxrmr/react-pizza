import { createSlice } from '@reduxjs/toolkit';
import type { ISortSchema } from '../types';

const initialState: ISortSchema = { sortOption: '' };

const sortSlice = createSlice({
  name: 'sortBy',
  initialState,
  reducers: {
    setSortOption(state, action) {
      state.sortOption = action.payload;
    },
  },
});

export const { reducer: sortReducer } = sortSlice;
export const { actions: sortAction } = sortSlice;
