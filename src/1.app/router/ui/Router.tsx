import { CartPage } from "pages/cart";
import { HomePage } from "pages/home";
import { NoRoutePage } from "pages/no-route";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PageError } from "shared/ui/PageError";
import { RoutePath } from "../config/routesConfig";

const router = createBrowserRouter([
  {
    path: RoutePath.home,
    element: <HomePage />,
    errorElement: <PageError />,
  },
  {
    path: RoutePath.cart,
    element: <CartPage />,
  },
  { path: "*", element: <NoRoutePage /> },
]);

export const Router = () => <RouterProvider router={router} />;
