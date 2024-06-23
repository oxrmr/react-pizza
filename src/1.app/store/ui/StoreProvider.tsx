import { type FC } from "react";
import { Provider, type ProviderProps } from "react-redux";

import { store } from "../config/storeConfig";

export const StoreProvider: FC<Pick<ProviderProps, "children">> = (props) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};
