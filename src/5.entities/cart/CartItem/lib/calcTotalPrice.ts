import type { OrderedProduct } from "../model/types";

export const calcTotalPrice = (items: OrderedProduct[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
