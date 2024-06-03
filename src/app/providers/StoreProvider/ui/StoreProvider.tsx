import { type FC, type ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children } = props;
  return <Provider store={createReduxStore()}>{children}</Provider>;
};

export default StoreProvider;
