import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

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
  const sortRef = useRef<HTMLDivElement>(null);

  const toggleIsVisible = () => setIsVisible(!isVisible);

  const stopPropagation = (e: MouseEvent) => e.stopPropagation();

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
    <div
      ref={sortRef}
      className={classNames(cls.SortBy, {}, [className])}
      onClick={stopPropagation}
    >
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
