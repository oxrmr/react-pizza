import { useState } from 'react';

import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import PlusSVG from 'assets/svg/plus.svg?react';

import cls from './PizzaItem.module.scss';

export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
}

export interface PizzaItemProps extends Pizza {
  className?: string;
}

export const PizzaItem = (props: PizzaItemProps) => {
  const { className = '', id, title, price, sizes, types } = props;

  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleTypeClick = (type: string) => () => {
    setSelectedType(type);
  };

  const handleSizeClick = (size: number) => () => {
    setSelectedSize(size);
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
