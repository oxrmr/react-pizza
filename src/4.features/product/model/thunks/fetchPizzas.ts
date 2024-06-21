import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "entities/product/ProductCard";
import { PizzasService, type PizzasServiceArgs } from "pages/home/api/PizzasService";

export const fetchPizzas = createAsyncThunk<Product[], PizzasServiceArgs>(
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
