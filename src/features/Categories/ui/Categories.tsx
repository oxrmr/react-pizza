import { type Dispatch, type SetStateAction } from 'react';

import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Categories.module.scss';

export interface CategoriesProps {
  className?: string;
  onClick: Dispatch<SetStateAction<number>>;
  categoryIdx: number;
}
const CATEGORIES = [
  'Всі',
  "М'ясні",
  'Вегетарианські',
  'На Грилі',
  'Гострі',
  'Закриті',
];

export const Categories = (props: CategoriesProps) => {
  const { className = '', onClick, categoryIdx } = props;

  const handleClick = (index: number) => () => {
    onClick(index);
  };

  return (
    <ul className={classNames(cls.Categories, {}, [className])}>
      {CATEGORIES.map((category, index) => (
        <li key={category}>
          <Button
            className={classNames(cls.btn, {
              [cls.active]: index === categoryIdx,
            })}
            theme={ButtonThemes.GREY}
            size={ButtonSizes.LG}
            onClick={handleClick(index)}
            type='button'
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
};
