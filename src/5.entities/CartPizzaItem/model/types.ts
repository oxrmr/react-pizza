export interface CartItem {
  id: string;
  imageURL: string;
  title: string;
  type: string;
  size: number;
  price: number;
  quantity: number;
}

export interface CartSchema {
  items: CartItem[];
  totalPrice: number;
}
