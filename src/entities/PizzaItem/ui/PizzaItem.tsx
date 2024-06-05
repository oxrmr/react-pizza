import { useState } from "react";

import PlusSVG from "assets/svg/plus.svg?react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSizes, ButtonThemes } from "shared/ui/Button/Button";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import { selectCartItemQuantity } from "entities/Cart/model/selectors/selectCartItemQuantity/selectCartItemQuantity";
import { cartActions } from "entities/Cart/model/slice/cartSlice";
import { useSelector } from "react-redux";
import cls from "./PizzaItem.module.scss";

export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  quantity: number;
}

export interface PizzaItemProps extends Pizza {
  className?: string;
}

export const PizzaItem = (props: PizzaItemProps) => {
  const { className = "", id, title, price, sizes, types } = props;
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const orderId = id + "size" + selectedSize.toString() + selectedType.toString(); //Todo: write fn for ids
  const dispatch = useAppDispatch();
  const quantity = useSelector(selectCartItemQuantity(orderId));

  const handleTypeClick = (type: string) => () => {
    setSelectedType(type);
  };

  const handleSizeClick = (size: number) => () => {
    setSelectedSize(size);
  };

  const handleAddButton = () => {
    console.log(
      "id",
      id,
      "selectedSize",
      selectedSize,
      "selectedType",
      selectedType,
      "order id",
      orderId
    );

    const newItem = {
      id: orderId,
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
        src="https://static.lieferando.de/images/restaurants/de/OR1NP7R1/products/veggie.png" //image should be webp format
        alt={title}
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
