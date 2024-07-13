import type { FC } from 'react';

import { selectCategoryIndex } from '../model/selectors/selectors';
import { categoriesActions } from '../model/slice/categoriesSlice';
import cls from './Categories.module.scss';

import { classNames, useAppDispatch, useAppSelector } from 'shared/lib';
import { UiButton, UiButtonSizes, UiButtonThemes } from 'shared/ui';

export interface ICategoriesProps {
  className?: string;
}
const CATEGORIES = ['Всі', "М'ясні", 'Вегетарианські', 'На Грилі', 'Гострі', 'Закриті'];

export const Categories: FC<ICategoriesProps> = props => {
  const { className = '' } = props;
  const dispatch = useAppDispatch();
  const categoryIdx = useAppSelector(selectCategoryIndex);

  const handleClick = (index: number) => () => {
    dispatch(categoriesActions.setCategory(index));
  };

  return (
    <ul className={classNames(cls.Categories, {}, [className])}>
      {CATEGORIES.map((category, index) => (
        <li key={category}>
          <UiButton
            className={classNames(cls.btn, {
              [cls.active]: index === categoryIdx,
            })}
            type='button'
            theme={UiButtonThemes.GREY}
            size={UiButtonSizes.LG}
            onClick={handleClick(index)}
          >
            {category}
          </UiButton>
        </li>
      ))}
    </ul>
  );
};
