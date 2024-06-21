import axios from "axios";
import type { Product } from "entities/product/ProductCard";

export interface PizzasServiceArgs {
  category: number;
  sortBy: string;
  page?: number;
  limit?: number;
}

const BASE_URL = "https://648f0cf375a96b664444a0cb.mockapi.io/pizzas";

export class PizzasService {
  static async fetchAll({ category, sortBy, page, limit }: PizzasServiceArgs) {
    const { data } = await axios.get<Product[]>(BASE_URL, {
      params: {
        category: category || undefined,
        sortBy: sortBy || "rating",
        page: page ?? 1,
        limit: limit || "",
      },
    });

    return data;
  }
}
