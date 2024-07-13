import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../thunks/fetchProducts';
import type { IProductsSchema } from '../types';

const initialState: IProductsSchema = {
  items: [],
  status: false,
  error: '',
};

const productSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.status = false;
      })
      .addCase(fetchProducts.pending, state => {
        state.status = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = JSON.stringify(action.error.message);
        state.status = false;
      });
  },
});

export const { reducer: productReducer } = productSlice;
