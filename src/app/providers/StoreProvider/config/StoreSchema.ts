import type { PizzasSchema } from "entities/PizzaItem/model/slice/types";

export interface StoreSchema {
  pizzas: PizzasSchema;
}
