export interface OrderItem {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  quantity: number;
  price: number;
}

export interface CartSchema {
  orderedItems: OrderItem[];
  orderTotalPrice: number;
}
