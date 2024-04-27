import axios from 'axios';
import type { Pizza } from 'entities/PizzaItem/ui/PizzaItem';

export class PizzasService {
  static async fetchAll(category: number, sortBy: string) {
    const { data } = await axios.get<Pizza[]>(
      `https://648f0cf375a96b664444a0cb.mockapi.io/pizzas`,
      {
        params: {
          category: category || undefined,
          sortBy: sortBy || 'rating',
        },
      }
    );

    return data;
  }
}
