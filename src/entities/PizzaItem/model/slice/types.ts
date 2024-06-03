import type { Pizza } from "entities/PizzaItem/ui/PizzaItem";

export interface PizzasSchema {
  items: Pizza[];
  isLoading: boolean;
  error: string;
}
