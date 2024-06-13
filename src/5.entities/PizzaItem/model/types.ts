export interface Pizza {
  id: number;
  imageURL: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  quantity: number;
}

export interface PizzasSchema {
  items: Pizza[];
  isLoading: boolean;
  error: string;
}
