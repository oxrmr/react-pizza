import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routesConfig } from '../config/routesConfig';

import SharedLayout from 'app/SharedLayout/SharedLayout';
import { PageError } from 'widgets/PageError';

const router = createBrowserRouter([
  {
    element: <SharedLayout />,
    errorElement: <PageError />,
    children: routesConfig,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
