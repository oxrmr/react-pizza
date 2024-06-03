import { useDispatch } from "react-redux";
import { createReduxStore } from "../store";

const store = createReduxStore();

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
