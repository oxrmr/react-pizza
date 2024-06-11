import type { PizzaItem } from "entities/PizzaItem/ui/PizzaItem";

export interface PizzasSchema {
  items: PizzaItem[];
  isLoading: boolean;
  error: string;
}
