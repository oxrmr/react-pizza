import cls from './CartPage.module.scss';
import { EmptyCart } from './EmptyCart';

import { CartItem, cartActions, selectCartTotalPrice } from 'entities/cart/cart-product-card';
import {
  selectCartItem,
  selectCartItemsTotal,
} from 'entities/cart/cart-product-card/model/selectors/selectors';
import { ArrowLeftSVG, CartSVG, TrashCanSVG } from 'shared/assets';
import { ErrorBoundary } from 'shared/error-boundary';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { routesPath } from 'shared/router';
import { Section, UiButton, UiLink, UiLinkThemes, UiLinkVariants } from 'shared/ui';

export default function CartPage() {
  const cartItemsTotal = useAppSelector(selectCartItemsTotal);

  return (
    <ErrorBoundary>
      <div className={cls.CartPage}>
        {!cartItemsTotal ? (
          <EmptyCart />
        ) : (
          <div className={cls.body}>
            <Header />
            <Main cartItemsTotal={cartItemsTotal} />
            <Footer />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}

function Header() {
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <header className={cls.header}>
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
    </header>
  );
}

function Main({ cartItemsTotal }: Readonly<{ cartItemsTotal: number }>) {
  const cartItemsData = useAppSelector(selectCartItemsData);
  const cartTotalPrice = useAppSelector(selectCartTotalPrice);

  return (
    <main className={cls.main}>
      <Section>
        {cartItemsData && (
          <ul className={cls.itemsList}>
            {cartItemsData.map(cartItemData => (
              <CartItem
                key={cartItemData.id}
                cartItemData={cartItemData}
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
    </main>
  );
}

function Footer() {
  return (
    <footer className={cls.footer}>
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
    </footer>
  );
}
