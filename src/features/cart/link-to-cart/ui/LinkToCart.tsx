import type { FC } from 'react';

import cls from './LinkToCart.module.scss';

import {
  selectCartItemsTotal,
  selectCartTotalPrice,
} from 'entities/cart/cart-product-card';
import { CartSVG } from 'shared/assets';
import { classNames, useAppSelector } from 'shared/lib';
import { routesPath } from 'shared/router';
import { UiLink, UiLinkThemes, UiLinkVariants } from 'shared/ui';

interface LinkToCartProps {
  className?: string;
}

export const LinkToCart: FC<LinkToCartProps> = props => {
  const cartTotalPrice = useAppSelector(selectCartTotalPrice);
  const cartItemsTotal = useAppSelector(selectCartItemsTotal);

  return (
    <UiLink
      className={classNames(cls.LinkToCart, {}, [props.className ?? ''])}
      variant={UiLinkVariants.button}
      theme={UiLinkThemes.accent}
      to={routesPath.cart}
    >
      <span className={cls.price}>{cartTotalPrice} ₴</span>
      <CartSVG className={cls.cartSvg} />
      <span>{cartItemsTotal}</span>
    </UiLink>
  );
};
