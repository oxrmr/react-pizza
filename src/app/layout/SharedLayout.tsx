import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
