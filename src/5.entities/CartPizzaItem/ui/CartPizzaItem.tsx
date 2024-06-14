import type { FC } from "react";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import { MinusSVG, PlusSVG, RemoveSVG } from "shared/assets";
import { Button } from "shared/ui/Button/Button";
import { cartActions } from "../model/slice/cartSlice";
import type { CartItem } from "../model/types";
import cls from "./CartPizzaItem.module.scss";

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

  const handleRemoveItem = () => {
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
