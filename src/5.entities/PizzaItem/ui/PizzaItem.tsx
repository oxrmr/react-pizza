import { useState, type FC } from "react";

import { AddToCart } from "features/Cart";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import type { Pizza } from "../model/types";
import cls from "./PizzaItem.module.scss";

export interface PizzaItemProps extends Pizza {
  className?: string;
}

const TEMP_IMG = "https://static.lieferando.de/images/restaurants/de/OR1NP7R1/products/veggie.png";

export const PizzaItem: FC<PizzaItemProps> = (props) => {
  const { className = "", id, title, types, sizes, price } = props;
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [orderId, setOrderId] = useState(id + "type");

  // const orderId = id + "type" + selectedType + selectedSize;

  const handleTypeClick = (type: string) => () => {
    setSelectedType(type);
    setOrderId((prev) => prev + type);
  };

  const handleSizeClick = (size: number) => () => {
    setSelectedSize(size);
    setOrderId((prev) => prev + size);
  };

  const newItem = {
    id: orderId,
    imageURL: TEMP_IMG,
    title,
    price,
    size: selectedSize,
    type: selectedType,
    quantity: 1,
  };

  return (
    <li
      className={classNames(cls.PizzaItem, {}, [className])}
      id={`${id}`}
    >
      <img
        className={cls.img}
        src={TEMP_IMG} //TODO: find img in webp format
        alt={title}
        width="260"
        height="260"
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
                type="button"
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
                type="button"
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
          <span>{price} ₴</span>
        </div>
        <AddToCart
          item={newItem}
          orderId={orderId}
        />
      </div>
    </li>
  );
};
