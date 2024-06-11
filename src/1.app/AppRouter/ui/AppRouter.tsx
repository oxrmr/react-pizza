import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routesConfig } from "../config/routesConfig";

import { SharedLayout } from "app/SharedLayout/SharedLayout";
import { PageError } from "shared/ui/PageError";

const router = createBrowserRouter(
  [
    {
      element: <SharedLayout />,
      errorElement: <PageError />,
      children: routesConfig,
    },
  ],
  { basename: "/" }
);

export const AppRouter = () => <RouterProvider router={router} />;
