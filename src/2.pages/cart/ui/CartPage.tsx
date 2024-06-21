import type { FC } from "react";
import { useSelector } from "react-redux";

import { RoutePath } from "app/router/config/routesConfig";
import { CartItem } from "entities/cart/CartItem";
import { selectCartItems } from "features/cart/model/selectors/selectCartItems/selectCartItems";
import { selectCartItemsQuantity } from "features/cart/model/selectors/selectCartItemsQuantity/selectCartItemsQuantity";
import { selectCartTotalPrice } from "features/cart/model/selectors/selectCartTotalPrice/selectCartTotalPrice";
import { cartActions } from "features/cart/model/slice/cartSlice";
import { ArrowLeftSVG, CartSVG, TrashCanSVG } from "shared/assets";
import { useAppDispatch } from "shared/lib";
import { Logo } from "shared/ui";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { AppLinkRoles, AppLinkThemes } from "shared/ui/AppLink/types";
import { Button } from "shared/ui/Button/Button";
import { Section } from "shared/ui/Section";
import cls from "./CartPage.module.scss";
import { EmptyCart } from "./EmptyCart";

const CartPage: FC = () => {
  const dispatch = useAppDispatch();
  const cartData = useSelector(selectCartItems);
  const cartTotalItems = useSelector(selectCartItemsQuantity);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };
  // TODO:remove unnecessary divs
  return (
    <div className={cls.CartPage}>
      <header className="header">
        <Logo className="header__logo" />
      </header>

      {!cartTotalItems ? (
        <EmptyCart />
      ) : (
        <div className={cls.body}>
          <div className={cls.header}>
            <div className={cls.titleWrapper}>
              <CartSVG className={cls.cartIcon} />
              <span className={cls.title}>Корзина</span>
            </div>
            <Button
              className={cls.clearCartButton}
              onClick={handleClearCart}
            >
              <TrashCanSVG className={cls.trashIcon} />
              <span className={cls.clearCartLabel}>Очистити корзину</span>
            </Button>
          </div>
          <div className={cls.main}>
            <Section>
              {cartData && (
                <ul className={cls.itemsList}>
                  {cartData.map((pizzaData) => (
                    <CartItem
                      key={pizzaData.id}
                      pizzaData={pizzaData}
                    />
                  ))}
                </ul>
              )}
            </Section>

            <Section sectionClassName={cls.orderTotalSection}>
              <p className={cls.priceLabel}>
                Кількість: <span className={cls.priceNum}>{cartTotalItems}</span>
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
              to={RoutePath.home}
            >
              <ArrowLeftSVG /> Назад
            </AppLink>
            {/* TODO: change to link when payment service connected  */}
            <AppLink
              className={cls.cartPayLink}
              role={AppLinkRoles.button}
              theme={AppLinkThemes.accent}
              to="#"
            >
              Сплатити
            </AppLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
