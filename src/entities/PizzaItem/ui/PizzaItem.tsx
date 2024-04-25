import { useState } from 'react';

import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import PlusSVG from 'assets/svg/plus.svg?react';

import cls from './PizzaItem.module.scss';

export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface PizzaItemProps extends Pizza {
  className?: string;
}

const PIZZA_TYPE = ['тонке', 'традиційне'];

export const PizzaItem = (props: PizzaItemProps) => {
  const { className = '', id, title, price, sizes, types } = props;

  const [selectedType, setSelectedType] = useState(0);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleTypeClick = (e: React.MouseEvent) => {
    const type = e.currentTarget.textContent;
    if (type) setSelectedType(PIZZA_TYPE.indexOf(type));
  };

  const handleSizeClick = (e: React.MouseEvent) => {
    const size = e.currentTarget.firstElementChild?.textContent;
    if (size) setSelectedSize(Number(size));
  };

  return (
    <li
      className={classNames(cls.PizzaItem, {}, [className])}
      id={`${id}`}
    >
      <img
        className={cls.img}
        src='https://static.lieferando.de/images/restaurants/de/OR1NP7R1/products/veggie.png'
        alt={title}
      />
      <h3 className={cls.title}>{title}</h3>
      <div className={cls.optionsWrapper}>
        {/* Pizza type list */}
        <ul className={classNames(cls.typesList, {}, [])}>
          {types.map((typeIndex) => (
            <li
              className={classNames(cls.typesItem, {
                [cls.active]: typeIndex === selectedType,
              })}
              key={typeIndex}
              onClick={handleTypeClick}
            >
              {PIZZA_TYPE[typeIndex]}
            </li>
          ))}
        </ul>
        {/* Pizza size list */}
        <ul className={classNames(cls.sizesList, {}, [])}>
          {sizes.map((size) => (
            <li
              className={classNames(cls.sizesItem, {
                [cls.active]: selectedSize === size,
              })}
              key={size}
              onClick={handleSizeClick}
            >
              <span>{size}</span>cm
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
          type='button'
        >
          <PlusSVG className={cls.plusIcon} />
          <span>Додати</span>
          {/* {1 && <i>1</i>} */}
        </Button>
      </div>
    </li>
  );
};
