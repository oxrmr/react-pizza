export interface ICartItem {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  quantity: number;
  price: number;
}

export interface CartItemId extends Pick<ICartItem, 'id'> {}

export interface ICartSchema {
  items: ICartItem[];
  totalPrice: number;
}
