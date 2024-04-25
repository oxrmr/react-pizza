import CartSVG from 'assets/svg/cart.svg?react';
import cls from './CartButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { RoutePath } from 'app/AppRouter/config/routesConfig';

export interface CartButtonProps {
  className?: string;
}

export const CartButton = (props: CartButtonProps) => {
  const { className = '' } = props;

  return (
    <Link
      to={RoutePath.cart}
      className={classNames(cls.CartButton, {}, [className])}
    >
      <span className={cls.price}>121 ₴</span>
      <CartSVG className={cls.cartSvg} />
      <span className={cls.quantity}>12</span>
    </Link>
  );
};
