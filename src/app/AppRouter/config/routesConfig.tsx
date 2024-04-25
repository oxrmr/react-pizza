import { CartPage } from 'pages/CartPage';
import { HomePage, homePageLoader } from 'pages/HomePage';
import type { RouteObject } from 'react-router-dom';

export enum Route {
  HOME = 'home',
  CART = 'cart',
}

export const RoutePath: Record<Route, string> = {
  [Route.HOME]: '/',
  [Route.CART]: '/cart',
};

export const routesConfig: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
    loader: homePageLoader,
  },
  {
    path: RoutePath.cart,
    element: <CartPage />,
  },
];
