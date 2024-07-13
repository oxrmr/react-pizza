import type { FC } from 'react';

import type { IProduct } from '../model/types';
import cls from './ProductCard.module.scss';

import { classNames } from 'shared/lib';

interface ProductOptionsProps extends Pick<IProduct, 'types' | 'sizes'> {
  onClickType: (type: string) => () => void;
  onClickSize: (size: number) => () => void;
  options: { id: number; type: string; size: number };
  className?: string;
}

export const ProductOptions: FC<ProductOptionsProps> = props => {
  const { types, sizes, onClickType, onClickSize, options, className = '' } = props;

  return (
    <ul className={classNames(cls.optionsList, {}, [className])}>
      <li className={cls.typesItem}>
        {types.map(type => (
          <button
            className={classNames(cls.optionBtn, {
              [cls.active]: type === options.type,
            })}
            type='button'
            onClick={onClickType(type)}
            key={type}
          >
            {type}
          </button>
        ))}
      </li>
      <li className={cls.sizesItem}>
        {sizes.map(size => (
          <button
            className={classNames(cls.optionBtn, {
              [cls.active]: size === options.size,
            })}
            type='button'
            onClick={onClickSize(size)}
            key={size}
          >
            {size}cm
          </button>
        ))}
      </li>
    </ul>
  );
};
