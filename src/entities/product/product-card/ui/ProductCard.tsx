import { useState, type FC, type ReactNode } from 'react';

import { generateCartItemId } from '../lib/generateCartItemId';
import type { IProduct } from '../model/types';
import cls from './ProductCard.module.scss';
import { ProductOptions } from './ProductOptions';

import type { ICartItem } from 'entities/cart/cart-product-card';
import { classNames } from 'shared/lib/utils/classNames/classNames';

export interface ProductCardProps {
  productData: IProduct;
  addToCartSlot?: (item: ICartItem) => ReactNode;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = props => {
  const { productData, addToCartSlot, className = '' } = props;
  const { id, imageUrl, title, types, sizes, price } = productData;
  const [options, setOptions] = useState({ id, type: types[0], size: sizes[0] });

  const handleTypeClick = (type: string) => () => {
    setOptions(prev => ({ ...prev, type }));
  };

  const handleSizeClick = (size: number) => () => {
    setOptions(prev => ({ ...prev, size }));
  };

  const orderedItem = {
    id: generateCartItemId(id, options.type, options.size),
    imageUrl,
    title,
    price,
    size: options.size,
    type: options.type,
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
        width='260'
        height='260'
        loading='lazy'
      />
      <h3 className={cls.title}>{title}</h3>

      <ProductOptions
        types={types}
        sizes={sizes}
        options={options}
        onClickSize={handleSizeClick}
        onClickType={handleTypeClick}
      />

      <div className={cls.bottom}>
        <div className={cls.price}>
          <span>від</span>
          <span>{price} ₴</span>
        </div>
        {addToCartSlot?.(orderedItem)}
      </div>
    </li>
  );
};
