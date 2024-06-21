import type { OrderedProduct } from "entities/cart/CartItem/model/types";

export interface CartSchema {
  items: OrderedProduct[];
  totalPrice: number;
}
