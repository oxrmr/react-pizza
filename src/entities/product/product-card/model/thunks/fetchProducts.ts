import { createAsyncThunk } from '@reduxjs/toolkit';

import { ProductService } from 'shared/api';
import type { ErrorType } from 'shared/types';
import type { IFetchProducts, IProduct } from '../types';

export const fetchProducts = createAsyncThunk<IProduct[], IFetchProducts>(
  'pizzas/fetchPizzas',
  async ({ category, sortBy, limit, page }, thunkAPI) => {
    try {
      return await ProductService.fetchAll({
        category: category,
        sortBy: sortBy,
        page: page,
        limit: limit,
      });
    } catch (error: unknown) {
      const knownError = error as ErrorType;

      return thunkAPI.rejectWithValue({
        messageError: knownError.message,
        status: knownError.response?.status,
      });
    }
  }
);
