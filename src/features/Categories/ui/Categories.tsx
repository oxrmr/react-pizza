import { useState } from 'react';

import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Categories.module.scss';

export interface CategoriesProps {
  className?: string;
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
  const { className = '' } = props;

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const categoryName = e.currentTarget.textContent;
    if (categoryName)
      setSelectedCategoryIndex(CATEGORIES.indexOf(categoryName));
  };

  return (
    <ul className={classNames(cls.Categories, {}, [className])}>
      {CATEGORIES.map((category, index) => (
        <li key={category}>
          <Button
            className={classNames(
              cls.btn,
              { [cls.active]: index === selectedCategoryIndex },
              []
            )}
            theme={ButtonThemes.GREY}
            size={ButtonSizes.LG}
            onClick={handleClick}
            type='button'
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
};
