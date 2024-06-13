import { Outlet, useLocation } from "react-router-dom";

import { RoutePath } from "app/AppRouter/config/routesConfig";
import { selectCartItemsQuantity } from "entities/CartPizzaItem/model/selectors/selectCartItemsQuantity/selectCartItemsQuantity";
import { selectCartTotalPrice } from "entities/CartPizzaItem/model/selectors/selectCartTotalPrice/selectCartTotalPrice";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { CartSVG } from "shared/assets";
import { Logo } from "shared/ui";
import { AppLink } from "shared/ui/AppLink/AppLink";

export const SharedLayout = () => {
  const location = useLocation();
  const totalPrice = useSelector(selectCartItemsQuantity);
  const totalItems = useSelector(selectCartTotalPrice);

  return (
    <>
      <header className="header">
        <Logo className="header__logo" />
        {location.pathname === RoutePath.home && (
          <AppLink
            to={RoutePath.cart}
            className="header__cart-link header-cart-link"
          >
            <span className="header-cart-link__price">{totalPrice} ₴</span>
            <CartSVG className="header-cart-link__cartSvg" />
            <span className="header-cart-link__ quantity">{totalItems}</span>
          </AppLink>
        )}
      </header>

      <Suspense fallback={""}>
        <Outlet />
      </Suspense>
    </>
  );
};
