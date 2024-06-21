import { createAsyncThunk } from "@reduxjs/toolkit";
import { PizzasService, type PizzasServiceArgs } from "pages/home/api/PizzasService";
import type { Pizza } from "../types";

export const fetchPizzas = createAsyncThunk<Pizza[], PizzasServiceArgs>(
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
