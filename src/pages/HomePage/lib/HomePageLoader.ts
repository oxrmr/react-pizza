import axios from 'axios';
import type { Pizza } from 'entities/PizzaItem/ui/PizzaItem';

export const homePageLoader = async () => {
  const { data } = await axios.get<Pizza[]>(
    'https://648f0cf375a96b664444a0cb.mockapi.io/pizzas'
  );

  return data;
};
