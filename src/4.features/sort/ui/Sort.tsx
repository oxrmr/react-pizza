import { useEffect, useState, type SyntheticEvent } from "react";

import { SortByArrowSVG } from "shared/assets";
import { useAppDispatch } from "shared/lib";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { sortAction } from "../model/slice/sortSlice";
import cls from "./Sort.module.scss";

export interface SortProps {
  className?: string;
}

const SORT_OPTIONS = [
  { title: "популярністю", option: "rating" },
  { title: "ціною", option: "price" },
  { title: "алфавітом", option: "title" },
];

export const Sort = (props: SortProps) => {
  const { className = "" } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [selectedSortTitle, setSelectedSortTitle] = useState(SORT_OPTIONS[0].title);
  const dispatch = useAppDispatch();

  const toggleIsVisible = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  const handleSort = (title: string, option: string) => () => {
    dispatch(sortAction.setSortOption(option));
    setSelectedSortTitle(title);
    setIsVisible(false);
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (e.target !== e.currentTarget) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener("click", handleBodyClick);

    return () => document.body.removeEventListener("click", handleBodyClick);
  }, []);

  return (
    <div className={classNames(cls.Sort, {}, [className])}>
      <Button
        className={cls.sortButton}
        type="button"
        onClick={toggleIsVisible}
      >
        <span className={cls.titleWrapper}>
          <SortByArrowSVG className={classNames(cls.arrowIcon, { [cls.rotate]: isVisible }, [])} />
          <span className={cls.sortTitle}>Сортувати за:</span>
        </span>
        <span className={cls.selectedSort}>{selectedSortTitle}</span>
      </Button>

      <ul className={classNames(cls.optionsList, { [cls.isVisible]: isVisible })}>
        {SORT_OPTIONS.map(({ title, option }) => (
          <li
            className={cls.optionsItem}
            key={title}
          >
            <Button
              className={classNames(cls.optionsButton, {
                [cls.active]: title === selectedSortTitle,
              })}
              type="button"
              onClick={handleSort(title, option)}
            >
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
