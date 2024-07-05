export interface IFetchProducts {
  category: number;
  sortBy: string;
  page?: number;
  limit?: number;
}

export interface IProduct {
  id: number;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  quantity: number;
}

export interface IProductsSchema {
  items: IProduct[];
  status: boolean;
  error: string;
}
