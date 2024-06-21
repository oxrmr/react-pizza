import type { FC } from "react";

import type { ICartItem } from "entities/cart/CartItem";

import { selectCartItemQuantity } from "features/cart/model/selectors/selectCartItemQuantity/selectCartItemQuantity";
import { cartActions } from "features/cart/model/slice/cartSlice";
import { useSelector } from "react-redux";
import { PlusSVG } from "shared/assets";
import { useAppDispatch } from "shared/lib";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSizes, ButtonThemes } from "shared/ui/Button/Button";
import cls from "./AddToCart.module.scss";

interface AddToCartProps {
  item: ICartItem;
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
      className={classNames(cls.AddToCartBtn, {}, [className])}
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
