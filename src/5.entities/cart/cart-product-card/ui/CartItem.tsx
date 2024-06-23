import type { FC } from "react";

import type { OrderItem } from "../model/types";
import cls from "./CartItem.module.scss";

import { MinusSVG, PlusSVG, RemoveSVG } from "shared/assets";
import { useAppDispatch } from "shared/lib";
import { classNames } from "shared/lib/utils/classNames/classNames";
import { Button } from "shared/ui";
import { cartActions } from "../model/slice/slice";

export interface CartItemProps {
  orderData: OrderItem;
  className?: string;
}

export const CartItem: FC<CartItemProps> = (props) => {
  const { orderData, className = "" } = props;
  const { id, imageUrl, title, type, size, quantity, price } = orderData;
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

  const handleRemoveItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li className={classNames(cls.CartItem, {}, [className])}>
      <div className={cls.itemLeftWrapper}>
        <img
          className={cls.image}
          src={imageUrl}
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
            type="button"
            onClick={handleDecrementItem}
          >
            <MinusSVG className={cls.minusIcon} />
          </Button>
          <p className={cls.quantity}>{quantity}</p>
          <Button
            className={cls.increaseBtn}
            type="button"
            onClick={handleIncrementItem}
          >
            <PlusSVG className={cls.plusIcon} />
          </Button>
        </div>
        <span className={cls.price}>{price * quantity}₴</span>
        {/* RemoveBtn */}
        <Button
          className={cls.removeBtn}
          type="button"
          onClick={handleRemoveItem}
        >
          <RemoveSVG className={cls.removeIcon} />
        </Button>
      </div>
    </li>
  );
};
