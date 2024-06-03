import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Pizza } from "entities/PizzaItem/ui/PizzaItem";
import {
  PizzasService,
  type PizzasServiceArgs,
} from "pages/HomePage/api/PizzasService";

export const fetchPizzas = createAsyncThunk<Pizza[], PizzasServiceArgs>(
  "pizzas/fetchPizzas",
  async ({ category, sortBy, limit, page }) => {
    const data = await PizzasService.fetchAll({
      category,
      sortBy,
      limit,
      page,
    });

    return data;
  }
);
