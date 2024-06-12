import { useState } from "react";
import { useSelector } from "react-redux";

import PlusSVG from "shared/assets/svg/plus-ic.svg?react";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import { selectCartItemQuantity } from "entities/CartPizzaItem/model/selectors/selectCartItemQuantity/selectCartItemQuantity";
import { cartActions } from "entities/CartPizzaItem/model/slice/cartSlice";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSizes, ButtonThemes } from "shared/ui/Button/Button";
import cls from "./PizzaItem.module.scss";

export interface PizzaItem {
  id: number;
  imageURL: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  quantity: number;
}

export interface PizzaItemProps extends PizzaItem {
  className?: string;
}

const TEMP_IMG = "https://static.lieferando.de/images/restaurants/de/OR1NP7R1/products/veggie.png";

export const PizzaItem = (props: PizzaItemProps) => {
  const { className = "", id, title, types, sizes, price } = props;
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const dispatch = useAppDispatch();

  const orderId = id + "type" + selectedType + selectedSize;
  const quantity = useSelector(selectCartItemQuantity(orderId));

  const handleTypeClick = (type: string) => () => {
    setSelectedType(type);
  };

  const handleSizeClick = (size: number) => () => {
    setSelectedSize(size);
  };

  const handleAddButton = () => {
    const newItem = {
      id: orderId,
      imageURL: TEMP_IMG,
      title,
      price,
      size: selectedSize,
      type: selectedType,
      quantity: 1,
    };
    dispatch(cartActions.addItem(newItem));
  };

  return (
    <li
      className={classNames(cls.PizzaItem, {}, [className])}
      id={`${id}`}
    >
      <img
        className={cls.img}
        src={TEMP_IMG} //Todo: find img in webp format
        alt={title}
        width="280"
        loading="lazy"
      />
      <h3 className={cls.title}>{title}</h3>
      <div className={cls.optionsWrapper}>
        {/* Pizza type list */}
        <ul className={classNames(cls.typesList, {}, [])}>
          {types.map((type) => (
            <li key={type}>
              <Button
                className={classNames(cls.typesButton, {
                  [cls.active]: type === selectedType,
                })}
                onClick={handleTypeClick(type)}
              >
                {type}
              </Button>
            </li>
          ))}
        </ul>
        {/* Pizza size list */}
        <ul className={classNames(cls.sizesList, {}, [])}>
          {sizes.map((size) => (
            <li key={size}>
              <Button
                className={classNames(cls.sizesButton, {
                  [cls.active]: selectedSize === size,
                })}
                onClick={handleSizeClick(size)}
              >
                {size}cm
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className={cls.bottom}>
        <div className={cls.price}>
          <span>від</span>
          <span>{price}</span>
          <span>₴</span>
        </div>
        <Button
          className={classNames(cls.addButton, {}, [])}
          theme={ButtonThemes.LIGHT}
          size={ButtonSizes.SM}
          outlined
          type="button"
          onClick={handleAddButton}
        >
          <PlusSVG className={cls.plusIcon} />
          <span>Додати</span>
          {quantity && <span className={cls.quantity}>{quantity}</span>}
        </Button>
      </div>
    </li>
  );
};
