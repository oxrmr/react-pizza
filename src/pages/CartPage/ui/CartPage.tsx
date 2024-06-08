import type { FC } from "react";
import { useSelector } from "react-redux";

import CartSVG from "assets/svg/cart-ic.svg?react";
import TrashCanSVG from "assets/svg/trash.svg?react";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import { CartItem } from "entities/CartItem";
import { selectCartItems } from "entities/CartItem/model/selectors/selectCartItems/selectCartItems";
import { cartActions } from "entities/CartItem/model/slice/cartSlice";
import { Button } from "shared/ui/Button/Button";
import { Section } from "shared/ui/Section";
import cls from "./CartPage.module.scss";

const CartPage: FC = () => {
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const cartData = useSelector(selectCartItems);
  return (
    <div>
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
      <main>
        <Section>
          {/* Items section */}
          {cartData && (
            <ul>
              {cartData.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                />
              ))}
            </ul>
          )}
        </Section>
      </main>
      <footer></footer>
    </div>
  );
};

export default CartPage;
