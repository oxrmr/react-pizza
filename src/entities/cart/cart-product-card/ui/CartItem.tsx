import type { FC } from 'react';

import { cartActions } from '../model/slice/cartSlice';
import type { ICartItem } from '../model/types';
import cls from './CartItem.module.scss';

import { ErrorBoundary } from 'shared/error-boundary';
import { classNames, useAppDispatch } from 'shared/lib';
import { UiQuantityCounter, UiRemoveButton } from 'shared/ui';

export interface ICartItemProps {
  cartItemData: ICartItem;
  className?: string;
}

export const CartItem: FC<ICartItemProps> = props => {
  const { cartItemData, className = '' } = props;
  const { id, imageUrl, title, type, size, quantity, price } = cartItemData;
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
    <ErrorBoundary>
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

          <div className={cls.textWrapper}>
            <h3 className={cls.title}>{title}</h3>
            <p className={cls.afterTitle}>
              {type}, {size} см.
            </p>
          </div>
        </div>
        <div className={cls.itemRightWrapper}>
          <UiQuantityCounter
            id={id}
            onClickDecrement={handleDecrementItem}
            onClickIncrement={handleIncrementItem}
            quantity={quantity}
          />
          <span className={cls.price}>{price * quantity}₴</span>

          <UiRemoveButton
            id={id}
            onClick={handleRemoveItem}
          />
        </div>
      </li>
    </ErrorBoundary>
  );
};
