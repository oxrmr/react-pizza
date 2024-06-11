import { PizzasService, type PizzasServiceArgs } from "2.pages/HomePage/api/PizzasService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PizzaItem } from "entities/PizzaItem/ui/PizzaItem";

export const fetchFromJSONServer = createAsyncThunk<PizzaItem[], PizzasServiceArgs>(
  "fetchFromJSONServer",
  async ({ category, sortBy, limit, page }) => {
    return await PizzasService.fetchFromJSONServer({
      category,
      sortBy,
      limit,
      page,
    });
  }
);
