import type { FC } from "react";
import { useSelector } from "react-redux";

import CartSVG from "shared/assets/svg/cart-ic.svg?react";
import TrashCanSVG from "shared/assets/svg/trash-ic.svg?react";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import { CartPizzaItem } from "entities/CartPizzaItem";
import { selectCartItems } from "entities/CartPizzaItem/model/selectors/selectCartItems/selectCartItems";
import { selectCartItemsQuantity } from "entities/CartPizzaItem/model/selectors/selectCartItemsQuantity/selectCartItemsQuantity";
import { cartActions } from "entities/CartPizzaItem/model/slice/cartSlice";
import { Button } from "shared/ui/Button/Button";
import { Section } from "shared/ui/Section";
import cls from "./CartPage.module.scss";

const CartPage: FC = () => {
  const dispatch = useAppDispatch();
  const cartData = useSelector(selectCartItems);
  const cartTotalItems = useSelector(selectCartItemsQuantity);

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Section sectionClassName={cls.CartPage}>
      <header className={cls.header}>
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
      </header>
      <main className={cls.main}>
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
      </main>
      <footer>
        {!!cartTotalItems && (
          <p className={cls.priceLabel}>
            Всього піц: <span className={cls.priceNumber}>{cartTotalItems}</span>
          </p>
        )}
      </footer>
    </Section>
  );
};

export default CartPage;
