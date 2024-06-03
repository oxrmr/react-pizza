import type { PizzasSchema } from "entities/PizzaItem/model/slice/types";
import type { CategorySchema } from "features/Categories/model/slice/types";
import type { SortyBySchema } from "features/SortBy/model/slice/types";

export interface StoreSchema {
  pizzas: PizzasSchema;
  category: CategorySchema;
  sortBy: SortyBySchema;
}
