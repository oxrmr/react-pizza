export interface FetchProductsArgs {
  category: number;
  sortBy: string;
  page?: number;
  limit?: number;
}

export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  quantity: number;
}

export interface ProductSchema {
  items: Product[];
  isLoading: boolean;
  error: string;
}
