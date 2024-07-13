import type { FC } from 'react';

import cls from './AddToCart.module.scss';

import {
  cartActions,
  selectCartItems,
  type ICartItem,
} from 'entities/cart/cart-product-card';
import { PlusSVG } from 'shared/assets';
import { classNames, useAppDispatch, useAppSelector } from 'shared/lib';
import { UiButton, UiButtonSizes, UiButtonThemes } from 'shared/ui';

interface AddToCartProps {
  itemToAdd: ICartItem;
  className?: string;
}

export const AddToCart: FC<AddToCartProps> = props => {
  const { className = '', itemToAdd } = props;
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const quantity = cartItems.find(item => item.id === itemToAdd.id)?.quantity;

  const handleAddToCart = () => {
    dispatch(cartActions.addItem(itemToAdd));
  };

  return (
    <UiButton
      className={classNames(cls.AddToCartBtn, {}, [className])}
      type='button'
      theme={UiButtonThemes.LIGHT}
      size={UiButtonSizes.SM}
      onClick={handleAddToCart}
      outlined
    >
      <PlusSVG className={cls.plusIcon} />
      <span>Додати</span>
      {!!quantity && <span className={cls.quantity}>{quantity}</span>}
    </UiButton>
  );
};
