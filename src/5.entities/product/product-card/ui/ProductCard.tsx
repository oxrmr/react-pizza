import { useState, type FC, type ReactNode } from "react";

import { generateOrderId } from "../lib/generateOrderId";
import type { Product } from "../model/types";
import cls from "./ProductCard.module.scss";

import type { OrderItem } from "entities/cart/cart-product-card";
import { classNames } from "shared/lib/utils/classNames/classNames";
import { Button } from "shared/ui/button/Button";

export interface ProductCardProps {
  productData: Product;
  action?: (item: OrderItem, id: string) => ReactNode;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { productData, action, className = "" } = props;
  const { id, imageUrl, title, types, sizes, price } = productData;
  const [order, setOrder] = useState({ id, type: types[0], size: sizes[0] });

  const handleTypeClick = (type: string) => () => {
    setOrder((prev) => ({ ...prev, type }));
  };

  const handleSizeClick = (size: number) => () => {
    setOrder((prev) => ({ ...prev, size }));
  };

  const orderedItem = {
    id: generateOrderId(order),
    imageUrl,
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
        src={imageUrl}
        alt={title}
        width="260"
        height="260"
        loading="lazy"
      />
      <h3 className={cls.title}>{title}</h3>

      <ul className={cls.optionsWrapper}>
        <li>
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
        </li>

        <li>
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
        </li>
      </ul>

      <div className={cls.bottom}>
        <div className={cls.price}>
          <span>від</span>
          <span>{price} ₴</span>
        </div>

        {action?.(orderedItem, orderedItem.id)}
      </div>
    </li>
  );
};
