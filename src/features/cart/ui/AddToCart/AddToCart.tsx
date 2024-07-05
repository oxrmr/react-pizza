import type { FC } from 'react';

import cls from './AddToCart.module.scss';

import { cartActions, selectCartItems, type ICartItem } from 'entities/cart/cart-product-card';
import { PlusSVG } from 'shared/assets';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { classNames } from 'shared/lib/utils/classNames/classNames';
import { Button, ButtonSizes, ButtonThemes } from 'shared/ui';

interface AddToCartProps {
  itemToAdd: ICartItem;
  className?: string;
}

export const AddToCart: FC<AddToCartProps> = (props) => {
  const { className = '', itemToAdd } = props;
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const quantity = cartItems.find((item) => item.id === itemToAdd.id)?.quantity;

  const handleAddToCart = () => {
    dispatch(cartActions.addItem(itemToAdd));
  };

  return (
    <Button
      className={classNames(cls.AddToCartBtn, {}, [className])}
      type='button'
      theme={ButtonThemes.LIGHT}
      size={ButtonSizes.SM}
      onClick={handleAddToCart}
      outlined
    >
      <PlusSVG className={cls.plusIcon} />
      <span>Додати</span>
      {!!quantity && <span className={cls.quantity}>{quantity}</span>}
    </Button>
  );
};
