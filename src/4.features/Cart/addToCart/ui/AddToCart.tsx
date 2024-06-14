import type { FC } from "react";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import type { CartItem } from "entities/CartPizzaItem";
import { selectCartItemQuantity } from "entities/CartPizzaItem/model/selectors/selectCartItemQuantity/selectCartItemQuantity";
import { cartActions } from "entities/CartPizzaItem/model/slice/cartSlice";
import { useSelector } from "react-redux";
import { PlusSVG } from "shared/assets";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSizes, ButtonThemes } from "shared/ui/Button/Button";
import cls from "./AddToCart.module.scss";

interface AddToCartProps {
  item: CartItem;
  orderId: string;
  className?: string;
}

export const AddToCart: FC<AddToCartProps> = (props) => {
  const { className = "", item, orderId } = props;
  const dispatch = useAppDispatch();
  const quantity = useSelector(selectCartItemQuantity(orderId));

  const handleAddToCart = () => {
    dispatch(cartActions.addItem(item));
  };

  return (
    <Button
      className={classNames(cls.addButton, {}, [className])}
      type="button"
      theme={ButtonThemes.LIGHT}
      size={ButtonSizes.SM}
      onClick={handleAddToCart}
      outlined
    >
      <PlusSVG className={cls.plusIcon} />
      <span>Додати</span>
      {quantity && <span className={cls.quantity}>{quantity}</span>}
    </Button>
  );
};
