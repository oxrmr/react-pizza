import axios from 'axios';
import { BASE_URL } from './model/constants';
import type { FetchAllParams } from './model/types';

export class ProductService {
  static async fetchAll<T>({ category, sortBy, page, limit }: FetchAllParams) {
    const { data } = await axios.get<T>(BASE_URL, {
      params: {
        category: category || undefined,
        sortBy: sortBy || 'rating',
        page: page ?? 1,
        limit: limit || '',
      },
    });

    return data;
  }
}
