import axios from "axios";
import type { PizzaItem } from "entities/PizzaItem/ui/PizzaItem";

export interface PizzasServiceArgs {
  category: number;
  sortBy: string;
  page?: number;
  limit?: number;
}
const SERVER_URL = "http://localhost:3000/pizzas?";

const BASE_URL = "https://648f0cf375a96b664444a0cb.mockapi.io/pizzas";

export class PizzasService {
  static async fetchAll({ category, sortBy, page, limit }: PizzasServiceArgs) {
    const { data } = await axios.get<PizzaItem[]>(BASE_URL, {
      params: {
        category: category || undefined,
        sortBy: sortBy || "rating",
        page: page ?? 1,
        limit: limit || "",
      },
    });

    return data;
  }

  static async fetchFromJSONServer({ category, sortBy, page, limit }: PizzasServiceArgs) {
    const response = await fetch(
      `${SERVER_URL}${category || undefined}&${sortBy || "rating"}${page ?? 1}${limit || ""}`
    );

    if (!response.ok) throw new Error(response.statusText);

    const responseToJSON = await response.json();

    return responseToJSON;
  }
}
