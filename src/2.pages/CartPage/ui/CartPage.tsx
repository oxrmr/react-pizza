import type { FC } from "react";
import { useSelector } from "react-redux";

import { RoutePath } from "app/AppRouter/config/routesConfig";
import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import { CartPizzaItem } from "entities/CartPizzaItem";
import { selectCartItems } from "entities/CartPizzaItem/model/selectors/selectCartItems/selectCartItems";
import { selectCartItemsQuantity } from "entities/CartPizzaItem/model/selectors/selectCartItemsQuantity/selectCartItemsQuantity";
import { selectCartTotalPrice } from "entities/CartPizzaItem/model/selectors/selectCartTotalPrice/selectCartTotalPrice";
import { cartActions } from "entities/CartPizzaItem/model/slice/cartSlice";
import { ArrowLeftSVG, CartSVG, PersonWithCartSVG, TrashCanSVG } from "shared/assets";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button/Button";
import { Section } from "shared/ui/Section";
import cls from "./CartPage.module.scss";

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
      {!cartTotalItems ? (
        <div className={cls.emptyCart}>
          <h3 className={cls.emptyCartTitle}>Корзина порожня 😕</h3>
          <p className={cls.emptyCartAfterTitle}>
            Найімовірніше, ви не замовляли ще піцу.<span className={cls.breakLine}></span> Щоб
            замовити піцу, перейдіть на головну сторінку.
          </p>
          <PersonWithCartSVG className={classNames(cls.emptyCartImg, {}, [])} />
          <AppLink
            className={cls.emptyCartBackToMainLink}
            to={RoutePath.home}
          >
            <ArrowLeftSVG /> На головну
          </AppLink>
        </div>
      ) : (
        <>
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
              {/* Items section */}
              {cartData && (
                <ul className={cls.itemsList}>
                  {cartData.map((item) => (
                    <CartPizzaItem
                      key={item.id}
                      {...item}
                    />
                  ))}
                </ul>
              )}
            </Section>

            {/* Order total section */}
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
              className={cls.cartBackToMainLink}
              to={RoutePath.home}
            >
              <ArrowLeftSVG /> Назад
            </AppLink>
            {/* TODO: change to link when payment service connected  */}
            <AppLink
              className={cls.cartPayLink}
              to="#"
            >
              Сплатити
            </AppLink>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
