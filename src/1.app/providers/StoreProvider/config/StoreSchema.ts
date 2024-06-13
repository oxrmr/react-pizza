import type { CartSchema } from "entities/CartPizzaItem/model/types";
import type { PizzasSchema } from "entities/PizzaItem/model/types";
import type { CategorySchema } from "features/Categories/model/slice/types";
import type { SortBySchema } from "features/SortBy/model/slice/types";

export interface StoreSchema {
  pizzas: PizzasSchema;
  category: CategorySchema;
  sortBy: SortBySchema;
  cart: CartSchema;
}
