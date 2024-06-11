import { Outlet, useLocation } from "react-router-dom";

import { RoutePath } from "app/AppRouter/config/routesConfig";
import CartSVG from "shared/assets/svg/cart-ic.svg?react";
import { selectCartItemsAmount } from "entities/CartItem/model/selectors/selectCartItemsAmount/selectCartItemsAmount";
import { selectCartTotalPrice } from "entities/CartItem/model/selectors/selectCartTotalPrice/selectCartTotalPrice";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import AppLink from "shared/ui/AppLink/AppLink";
import Logo from "shared/ui/Logo/ui/Logo";

export const SharedLayout = () => {
  const location = useLocation();
  const totalPrice = useSelector(selectCartItemsAmount);
  const totalItems = useSelector(selectCartTotalPrice);

  return (
    <>
      <header className="header">
        <Logo className="header__logo" />
        {location.pathname === RoutePath.home && (
          <AppLink
            to={RoutePath.cart}
            className="header__btn header-btn"
          >
            <span className="header-btn__price">{totalPrice} ₴</span>
            <CartSVG className="header-btn__cartSvg" />
            <span className="header-btn__ quantity">{totalItems}</span>
          </AppLink>
        )}
      </header>
      <Suspense fallback={""}>
        <Outlet />
      </Suspense>
    </>
  );
};
