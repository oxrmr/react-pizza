import type { FC } from 'react';

import cls from './CartPage.module.scss';

// TODO:Move EB to shared
import { ErrorBoundary } from 'app/error-boundary';
import {
  CartItem,
  cartActions,
  selectCartTotalPrice,
} from 'entities/cart/cart-product-card';
import {
  selectCartItems,
  selectCartItemsTotal,
} from 'entities/cart/cart-product-card/model/selectors/selectors';
import { ArrowLeftSVG, CartSVG, TrashCanSVG } from 'shared/assets';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { routesPath } from 'shared/router';
import { Section } from 'shared/ui';
import { AppLink } from 'shared/ui/app-link/AppLink';
import { AppLinkRoles, AppLinkThemes } from 'shared/ui/app-link/types';
import { Button } from 'shared/ui/button/Button';
import { EmptyCart } from './EmptyCart';

const CartPage: FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cartItemsTotal = useAppSelector(selectCartItemsTotal);
  const cartTotalPrice = useAppSelector(selectCartTotalPrice);

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };
  return (
    <ErrorBoundary>
      <div
        className={cls.CartPage}
        data-testid='cartPage'
      >
        {!cartItemsTotal ? (
          <EmptyCart />
        ) : (
          <div className={cls.body}>
            <div className={cls.header}>
              <div className={cls.titleWrapper}>
                <CartSVG className={cls.cartIcon} />
                <h3 className={cls.title}>Корзина</h3>
              </div>
              <Button
                className={cls.clearCartButton}
                onClick={handleClearCart}
              >
                <TrashCanSVG />
                <span className={cls.clearCartLabel}>Очистити корзину</span>
              </Button>
            </div>
            <div className={cls.main}>
              <Section>
                {cartItems && (
                  <ul className={cls.itemsList}>
                    {cartItems.map(cartItem => (
                      <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                      />
                    ))}
                  </ul>
                )}
              </Section>

              <Section sectionClassName={cls.orderTotalSection}>
                <p className={cls.priceLabel}>
                  Кількість: <span className={cls.priceNum}>{cartItemsTotal}</span>
                </p>
                <p className={cls.totalPriceLabel}>
                  Сума: <span className={cls.totalPriceNum}>{cartTotalPrice} ₴</span>
                </p>
              </Section>
            </div>
            <div className={cls.footer}>
              <AppLink
                className={cls.goBackLink}
                role={AppLinkRoles.button}
                theme={AppLinkThemes.grey}
                to={routesPath.home}
              >
                <ArrowLeftSVG /> Назад
              </AppLink>
              {/* TODO: change to link when payment service connected  */}
              <AppLink
                className={cls.cartPayLink}
                role={AppLinkRoles.button}
                theme={AppLinkThemes.accent}
                to='#'
              >
                Сплатити
              </AppLink>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default CartPage;
