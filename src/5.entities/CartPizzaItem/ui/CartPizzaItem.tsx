import type { FC } from "react";

import MinusSVG from "shared/assets/svg/minus-ic.svg?react";
import PlusSVG from "shared/assets/svg/plus-ic.svg?react";
import RemoveSVG from "shared/assets/svg/remove-ic.svg?react";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { cartActions } from "../model/slice/cartSlice";
import type { CartItem } from "../model/types";
import cls from "./CartPizzaItem.module.scss";
// width and hight for images

export interface CartItemProps extends CartItem {}

export const CartPizzaItem: FC<CartItemProps> = ({
  id,
  imageURL,
  title,
  type,
  size,
  quantity,
  price,
}) => {
  const dispatch = useAppDispatch();

  const handleIncrementItem = () => {
    dispatch(cartActions.incrementItem(id));
  };

  const handleDecrementItem = () => {
    if (quantity !== 1) {
      dispatch(cartActions.decrementItem(id));
    } else {
      dispatch(cartActions.removeItem(id));
    }
  };

  const handleRemove = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li className={cls.CartPizzaItem}>
      <div className={cls.itemLeftWrapper}>
        <img
          className={cls.image}
          src={imageURL}
          alt="Pizza"
          width="80"
          height="80"
          loading="lazy"
        />
        {/* Title and afterTitle */}
        <div className={cls.textWrapper}>
          <h3 className={cls.title}>{title}</h3>
          <p className={cls.afterTitle}>
            {type}, {size} см.
          </p>
        </div>
      </div>
      <div className={cls.itemRightWrapper}>
        {/* QuantityCounter */}
        <div className={cls.quantityCounter}>
          <Button
            className={cls.decreaseBtn}
            onClick={handleDecrementItem}
          >
            <MinusSVG className={cls.minusIcon} />
          </Button>
          <p className={cls.quantity}>{quantity}</p>
          <Button
            className={cls.increaseBtn}
            onClick={handleIncrementItem}
          >
            <PlusSVG className={cls.plusIcon} />
          </Button>
        </div>
        {/* Price */}
        <span className={cls.price}>{price * quantity}₴</span>
        {/* RemoveBtn */}
        <Button
          className={cls.removeBtn}
          onClick={handleRemove}
        >
          <RemoveSVG className={cls.removeIcon} />
        </Button>
      </div>
    </li>
  );
};
