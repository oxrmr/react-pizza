import { Link } from "react-router-dom";

import cls from "./Header.module.scss";

import { selectCartItemsTotal, selectCartTotalPrice } from "entities/cart/cart-product-card";
import { CartSVG } from "shared/assets";
import { routesPath } from "shared/router";
import { AppLink, AppLinkRoles, AppLinkThemes, Logo } from "shared/ui";
import { useAppSelector } from "shared/lib";

export const Header = () => {
  const cartItemsTotal = useAppSelector(selectCartItemsTotal);
  const cartTotalPrice = useAppSelector(selectCartTotalPrice);

  return (
    <header className={cls.Header}>
      <Link
        className={cls.logo}
        to={routesPath.home}
      >
        <Logo />
      </Link>
      {location.pathname === routesPath.home && (
        <AppLink
          className={cls.linkToCart}
          role={AppLinkRoles.button}
          theme={AppLinkThemes.accent}
          to={routesPath.cart}
        >
          <span className={cls.price}>{cartTotalPrice} ₴</span>
          <CartSVG className={cls.cartSvg} />
          <span>{cartItemsTotal}</span>
        </AppLink>
      )}
    </header>
  );
};
