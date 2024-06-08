import type { Pizza } from "entities/PizzaItem/ui/PizzaItem";

export interface CartSchema {
  items: Pizza[];
  totalPrice: number;
}
