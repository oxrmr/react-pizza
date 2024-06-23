import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { store } from "./store/config/storeConfig";

export const AppProviders = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
