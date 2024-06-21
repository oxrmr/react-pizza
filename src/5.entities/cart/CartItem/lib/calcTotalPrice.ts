import type { ICartItem } from "../../../../4.features/product/model/types";

export const calcTotalPrice = (items: ICartItem[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
