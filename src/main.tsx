import ReactDOM from "react-dom/client";

import { ErrorBoundary } from "app/providers/error-boundary";

import App from "app/App";
import "app/styles/index.scss";
import { StoreProvider } from "app/providers/store/ui/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ErrorBoundary>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ErrorBoundary>
);
