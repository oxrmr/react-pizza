import ReactDOM from "react-dom/client";

import { ErrorBoundary } from "app/providers/ErrorBoundary";

import App from "app/App";
import StoreProvider from "app/providers/StoreProvider/ui/StoreProvider";
import "app/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ErrorBoundary>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ErrorBoundary>
);
