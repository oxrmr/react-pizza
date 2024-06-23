export type { Product, ProductSchema } from "./model/types";

export {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from "./model/selectors/selectors";
export { productReducer } from "./model/slice/slice";
export { fetchProducts } from "./model/thunks/thunks";
export { ProductCard } from "./ui/ProductCard";
