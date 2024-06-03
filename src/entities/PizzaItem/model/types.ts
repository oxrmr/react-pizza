import type { Pizza } from "../ui/PizzaItem";

export interface PizzasStateSchema {
  items: Pizza[];
  isLoading: boolean;
  error: string;
}
