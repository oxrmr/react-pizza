import { Suspense } from "react";
import { Router } from "./router";

export default function App() {
  return (
    <div className="app">
      <Suspense>
        <Router />
      </Suspense>
    </div>
  );
}
