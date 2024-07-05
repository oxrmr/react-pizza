import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../config/routerConfig';

export const AppRouter = () => (
  <Suspense>
    <RouterProvider router={router} />
  </Suspense>
);
