import type { PizzaItem } from "../ui/PizzaItem";

export interface PizzasStateSchema {
  items: PizzaItem[];
  isLoading: boolean;
  error: string;
}
