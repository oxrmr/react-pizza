import ReactDOM from "react-dom/client";

import App from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

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
