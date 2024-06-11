import type { CategorySchema } from "4.features/Categories/model/slice/types";
import type { SortBySchema } from "4.features/SortBy/model/slice/types";
import type { CartSchema } from "entities/CartItem/model/slice/CartSchema";
import type { PizzasSchema } from "entities/PizzaItem/model/slice/types";

export interface StoreSchema {
  pizzas: PizzasSchema;
  category: CategorySchema;
  sortBy: SortBySchema;
  cart: CartSchema;
}
