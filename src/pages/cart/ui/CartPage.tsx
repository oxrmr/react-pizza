import type { FC } from 'react';

import cls from './CartPage.module.scss';

// TODO:Move EB to shared
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
import { ErrorBoundary } from 'shared/error-boundary';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { routesPath } from 'shared/router';
import { Section, UiButton, UiLink, UiLinkThemes, UiLinkVariants } from 'shared/ui';
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
              <UiButton
                className={cls.clearCartButton}
                onClick={handleClearCart}
              >
                <TrashCanSVG />
                <span className={cls.clearCartLabel}>Очистити корзину</span>
              </UiButton>
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
              <UiLink
                className={cls.goBackLink}
                role={UiLinkVariants.button}
                theme={UiLinkThemes.grey}
                to={routesPath.home}
              >
                <ArrowLeftSVG /> Назад
              </UiLink>

              <UiLink
                className={cls.cartPayLink}
                role={UiLinkVariants.button}
                theme={UiLinkThemes.accent}
                to='#'
              >
                Сплатити
              </UiLink>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default CartPage;
