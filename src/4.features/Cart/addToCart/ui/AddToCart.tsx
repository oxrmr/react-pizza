import type { FC } from "react";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import type { CartItem } from "entities/CartPizzaItem";
import { cartActions } from "entities/CartPizzaItem/model/slice/cartSlice";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./AddToCart.module.scss";

interface AddToCartProps {
  item: CartItem;
  className?: string;
}

export const AddToCart: FC<AddToCartProps> = (props) => {
  const { item, className = "" } = props;
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addItem(item));
  };

  return (
    <Button
      className={classNames(cls.AddToCart, {}, [className])}
      onClick={handleAddToCart}
    >
      Додати
    </Button>
  );
};
