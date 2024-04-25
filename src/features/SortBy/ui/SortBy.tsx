import { useState } from 'react';

import ArrowSVG from 'assets/svg/sort-arrow.svg?react';
import cls from './SortBy.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export interface SortByProps {
  className?: string;
}

const SORT_OPTIONS = ['популярністю', 'ціною', 'алфавітом'];

export const SortBy = (props: SortByProps) => {
  const { className = '' } = props;

  const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS[0]);
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => setIsVisible((prev) => !prev);

  const handleSelectSort = (e: React.MouseEvent) => {
    setSelectedSort(e.currentTarget.textContent!);
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
          <span className={cls.selectedSort}>{selectedSort}</span>
        </div>
      </div>
      <ul className={classNames(cls.list, { [cls.isVisible]: isVisible }, [])}>
        {SORT_OPTIONS.map((option) => (
          <li
            className={classNames(cls.item, {
              [cls.active]: option === selectedSort,
            })}
            key={option}
            onClick={handleSelectSort}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
