import { CartPage } from "pages/CartPage";
import { HomePage } from "pages/HomePage";
import NoRoutePage from "pages/NoRoutePage/NoRoutePage";
import type { RouteObject } from "react-router-dom";

export enum Route {
  HOME = "home",
  CART = "cart",
}

export const RoutePath: Record<Route, string> = {
  [Route.HOME]: "/",
  [Route.CART]: "/cart",
};

export const routesConfig: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: RoutePath.cart,
    element: <CartPage />,
  },
  { path: "*", element: <NoRoutePage /> },
];
