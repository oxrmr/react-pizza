import type { Product } from "entities/product/ProductCard";

export interface OrderedProduct extends Omit<Product, "id" | "sizes" | "types"> {
  id: string;
  type: string;
  size: number;
}
