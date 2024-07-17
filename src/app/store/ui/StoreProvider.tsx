import { type FC, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/storeConfig';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={createReduxStore()}>{children}</Provider>;
};
