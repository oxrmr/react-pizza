import type { FC } from "react";

import { MinusSVG, PlusSVG, RemoveSVG } from "shared/assets";
import { useAppDispatch } from "shared/lib";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";

import cls from "./CartItem.module.scss";
import { cartActions } from "features/cart/model/slice/cartSlice";
import type { OrderedProduct } from "..";

export interface CartItemProps {
  pizzaData: OrderedProduct;
  className?: string;
}

export const CartItem: FC<CartItemProps> = (props) => {
  const { pizzaData, className = "" } = props;
  const { id, imageURL, title, type, size, quantity, price } = pizzaData;
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
