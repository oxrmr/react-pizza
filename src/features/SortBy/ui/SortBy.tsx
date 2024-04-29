import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
  type SyntheticEvent,
} from 'react';

import ArrowSVG from 'assets/svg/sort-arrow.svg?react';
import cls from './SortBy.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

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

  const toggleIsVisible = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  const handleSort = (sort: string, title: string) => () => {
    onClick(sort);
    setSortTitle(title);
    setIsVisible(false);
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (e.target !== e.currentTarget) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener('click', handleBodyClick);

    return () => document.body.removeEventListener('click', handleBodyClick);
  }, []);

  return (
    <div className={classNames(cls.SortBy, {}, [className])}>
      <Button
        className={cls.sortButton}
        onClick={toggleIsVisible}
      >
        <span className={cls.titleWrapper}>
          <ArrowSVG
            className={classNames(
              cls.arrowIcon,
              { [cls.rotate]: isVisible },
              []
            )}
          />
          <span className={cls.sortByTitle}>Сортувати за:</span>
        </span>
        <span className={cls.selectedSort}>{sortTitle}</span>
      </Button>
      <ul
        className={classNames(cls.optionsList, { [cls.isVisible]: isVisible })}
      >
        {SORT_OPTIONS.map(({ title, sort }) => (
          <li
            className={cls.optionsItem}
            key={title}
          >
            <Button
              className={classNames(cls.optionsButton, {
                [cls.active]: title === sortTitle,
              })}
              onClick={handleSort(sort, title)}
            >
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
