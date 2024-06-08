import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Pizza } from "entities/PizzaItem/ui/PizzaItem";
import { PizzasService, type PizzasServiceArgs } from "pages/HomePage/api/PizzasService";

export const fetchFromJSONServer = createAsyncThunk<Pizza[], PizzasServiceArgs>(
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
