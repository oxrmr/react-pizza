import { CartPage } from "pages/cart";
import { HomePage } from "pages/home";
import { NoRoutePage } from "pages/no-route";
import { createBrowserRouter } from "react-router-dom";
import { routesPath } from "shared/router";

export const router = createBrowserRouter([
  {
    path: routesPath.home,
    element: <HomePage />,
  },
  {
    path: routesPath.cart,
    element: <CartPage />,
  },
  { path: "*", element: <NoRoutePage /> },
]);
