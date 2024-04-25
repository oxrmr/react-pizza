import { BugButton } from 'app/providers/ErrorBoundary';
import { CartButton } from 'entities/CartButton';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from 'shared/ui/Logo/ui/Logo';

const SharedLayout = () => {
  return (
    <>
      <header className='header'>
        <Logo className='header__logo' />
        <CartButton className='header__button' />
      </header>
      <BugButton />
      <Suspense fallback={<div>...loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
