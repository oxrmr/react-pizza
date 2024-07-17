import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
