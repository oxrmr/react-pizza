import type { CartSchema } from "entities/cart/cart-product-card";
import type { ProductSchema } from "entities/product/product-card";
import type { CategoriesSchema } from "features/categories/model/slice/types";
import type { SortSchema } from "features/sort/model/slice/types";

export interface StoreSchema {
  product: ProductSchema;
  categories: CategoriesSchema;
  sort: SortSchema;
  cart: CartSchema;
}
