import type { OrderedProduct } from "entities/cart/CartItem/model/types";

export const calcTotalPrice = (items: OrderedProduct[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
