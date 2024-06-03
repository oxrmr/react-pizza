import axios from "axios";
import type { Pizza } from "entities/PizzaItem/ui/PizzaItem";

export interface PizzasServiceArgs {
  category: number;
  sortBy: string;
  page?: number;
  limit?: number;
}

const axiosInstance = axios.create({
  baseURL: "https://648f0cf375a96b664444a0cb.mockapi.io/",
});

export class PizzasService {
  static async fetchAll({ category, sortBy, page, limit }: PizzasServiceArgs) {
    const { data } = await axiosInstance.get<Pizza[]>(
      `https://648f0cf375a96b664444a0cb.mockapi.io/pizzas`,
      {
        params: {
          category: category || undefined,
          sortBy: sortBy || "rating",
          page: page ?? 1,
          limit: limit || "",
        },
      }
    );

    return data;
  }
}
