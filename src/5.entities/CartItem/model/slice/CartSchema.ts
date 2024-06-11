import type { CartItemProps } from "entities/CartItem/ui/CartItem";

export interface CartSchema {
  items: CartItemProps[];
  totalPrice: number;
}
