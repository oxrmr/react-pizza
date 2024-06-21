import { useState, type FC } from "react";

import { AddToCart } from "features/cart";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { generateOrderId } from "../lib/generateOrderId";
import type { Product } from "../model/types";
import cls from "./ProductCard.module.scss";

export interface ProductCardProps {
  productData: Product;
  className?: string;
}

const TEMP_IMG = "https://static.lieferando.de/images/restaurants/de/OR1NP7R1/products/veggie.png";

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { className = "", productData } = props;
  const { id, title, types, sizes, price } = productData;
  const [order, setOrder] = useState({ id, type: types[0], size: sizes[0] });

  const handleTypeClick = (type: string) => () => {
    setOrder((prev) => ({ ...prev, type }));
  };

  const handleSizeClick = (size: number) => () => {
    setOrder((prev) => ({ ...prev, size }));
  };

  const orderedItem = {
    id: generateOrderId(order),
    imageURL: TEMP_IMG,
    title,
    price,
    size: order.size,
    type: order.type,
    quantity: 1,
  };

  return (
    <li
      className={classNames(cls.ProductCard, {}, [className])}
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
        <ul className={classNames(cls.typesList, {}, [])}>
          {types.map((type) => (
            <li key={type}>
              <Button
                className={classNames(cls.typesButton, {
                  [cls.active]: type === order.type,
                })}
                type="button"
                onClick={handleTypeClick(type)}
              >
                {type}
              </Button>
            </li>
          ))}
        </ul>

        <ul className={classNames(cls.sizesList, {}, [])}>
          {sizes.map((size) => (
            <li key={size}>
              <Button
                className={classNames(cls.sizesButton, {
                  [cls.active]: size === order.size,
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
          item={orderedItem}
          orderId={orderedItem.id}
        />
      </div>
    </li>
  );
};
