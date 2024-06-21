import type { CartSchema } from "features/cart/model/types";
import type { CategoriesSchema } from "features/categories/model/slice/types";
import type { SortSchema } from "features/sort/model/slice/types";
import type { ProductSchema } from "widgets/product/model/types";

export interface StoreSchema {
  product: ProductSchema;
  categories: CategoriesSchema;
  sort: SortSchema;
  cart: CartSchema;
}
