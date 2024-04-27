import { useState, type Dispatch, type SetStateAction } from 'react';

import ArrowSVG from 'assets/svg/sort-arrow.svg?react';
import cls from './SortBy.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface SortByProps {
  className?: string;
  onClick: Dispatch<SetStateAction<string>>;
}

const SORT_OPTIONS = [
  { title: 'популярністю', sort: 'rating' },
  { title: 'ціною', sort: 'price' },
  { title: 'алфавітом', sort: 'title' },
];

export const SortBy = (props: SortByProps) => {
  const { className = '', onClick } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [sortTitle, setSortTitle] = useState(SORT_OPTIONS[0].title);

  const toggleIsVisible = () => setIsVisible((prev) => !prev);

  const handleSort = (sort: string, title: string) => () => {
    onClick(sort);
    setSortTitle(title);
    setIsVisible(false);
  };

  return (
    <div className={classNames(cls.SortBy, {}, [className])}>
      <div
        className={cls.titleWrapper}
        onClick={toggleIsVisible}
      >
        <div className={cls.title}>
          <ArrowSVG
            className={classNames(
              cls.arrowIcon,
              { [cls.rotate]: isVisible },
              []
            )}
          />
          <h3>Сортувати за:</h3>
        </div>
        <div className={cls.selectedSortWrapper}>
          <span className={cls.selectedSort}>{sortTitle}</span>
        </div>
      </div>
      <ul className={classNames(cls.list, { [cls.isVisible]: isVisible })}>
        {SORT_OPTIONS.map(({ title, sort }) => (
          <li
            className={classNames(cls.item, {
              [cls.active]: title === sortTitle,
            })}
            key={title}
            onClick={handleSort(sort, title)}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
