import { PizzasService, type PizzasServiceArgs } from "pages/HomePage/api/PizzasService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PizzaItem } from "entities/PizzaItem/ui/PizzaItem";

export const fetchPizzas = createAsyncThunk<PizzaItem[], PizzasServiceArgs>(
  "pizzas/fetchPizzas",
  async ({ category, sortBy, limit, page }) => {
    return await PizzasService.fetchAll({
      category,
      sortBy,
      limit,
      page,
    });
  }
);
