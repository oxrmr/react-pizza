import type { FC } from 'react';

import type { ICartItem } from '../model/types';
import cls from './CartItem.module.scss';

import { useAppDispatch } from 'shared/lib';
import { classNames } from 'shared/lib/utils/classNames/classNames';
import { QuantityCounter } from 'shared/ui';
import { RemoveButton } from 'shared/ui/remove-button/RemoveButton';
import { cartActions } from '../model/slice/slice';

export interface ICartItemProps {
  cartItem: ICartItem;
  className?: string;
}

export const CartItem: FC<ICartItemProps> = (props) => {
  const { cartItem, className = '' } = props;
  const { id, imageUrl, title, type, size, quantity, price } = cartItem;
  const dispatch = useAppDispatch();

  const handleIncrementItem = (id: string) => () => {
    dispatch(cartActions.incrementItem(id));
  };

  const handleDecrementItem = (id: string) => () => {
    if (quantity !== 1) {
      dispatch(cartActions.decrementItem(id));
    } else {
      dispatch(cartActions.removeItem(id));
    }
  };

  const handleRemoveItem = (id: string) => () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li className={classNames(cls.CartItem, {}, [className])}>
      <div className={cls.itemLeftWrapper}>
        <img
          className={cls.image}
          src={imageUrl}
          alt='Pizza'
          width='80'
          height='80'
          loading='lazy'
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
        <QuantityCounter
          id={id}
          onClickDecrement={handleDecrementItem}
          onClickIncrement={handleIncrementItem}
          quantity={quantity}
        />
        <span className={cls.price}>{price * quantity}₴</span>
        {/* RemoveBtn */}
        <RemoveButton
          id={id}
          onClick={handleRemoveItem}
        />
      </div>
    </li>
  );
};
