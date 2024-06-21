import type { Product } from "entities/product/ProductCard";

export interface ProductSchema {
  items: Product[];
  isLoading: boolean;
  error: string;
}
