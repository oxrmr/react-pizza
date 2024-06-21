import { createReduxStore } from "app/providers/store/config/store";
import { useDispatch } from "react-redux";
// TODO:refactor
const store = createReduxStore();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
