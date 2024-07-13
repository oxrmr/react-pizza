import cls from './Header.module.scss';

import { HeaderLogo } from './HeaderLogo';

import { LinkToCart } from 'features/cart/link-to-cart';
import { routesPath } from 'shared/router';

export const Header = () => {
  return (
    <header className={cls.Header}>
      <HeaderLogo className={cls.logo} />
      {location.pathname === routesPath.home && <LinkToCart />}
    </header>
  );
};
