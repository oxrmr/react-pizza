export type { IProduct, IProductsSchema } from './model/types';

export {
  selectProducts,
  selectProductsError,
  selectProductsFetchStatus,
} from './model/selectors/selectors';
export { productReducer } from './model/slice/slice';
export { fetchProducts } from './model/thunks/fetchProducts';
export { ProductCard } from './ui/ProductCard';
