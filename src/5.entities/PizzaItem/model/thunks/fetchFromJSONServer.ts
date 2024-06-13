import { PizzasService, type PizzasServiceArgs } from "2.pages/HomePage/api/PizzasService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Pizza } from "../types";

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
