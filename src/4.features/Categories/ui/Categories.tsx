import { useSelector } from "react-redux";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSizes, ButtonThemes } from "shared/ui/Button/Button";
import { selectCategoryIndex } from "../model/selectors/selectCategoryFilterValut.ts/selectCategoryIndex";
import { categoryActions } from "../model/slice/categorySlice";
import cls from "./Categories.module.scss";

export interface CategoriesProps {
  className?: string;
}
const CATEGORIES = ["Всі", "М'ясні", "Вегетарианські", "На Грилі", "Гострі", "Закриті"];

export const Categories = (props: CategoriesProps) => {
  const { className = "" } = props;

  const dispatch = useAppDispatch();
  const categoryIdx = useSelector(selectCategoryIndex);

  const handleClick = (index: number) => () => {
    dispatch(categoryActions.setCategory(index));
  };

  return (
    <ul className={classNames(cls.Categories, {}, [className])}>
      {CATEGORIES.map((category, index) => (
        <li key={category}>
          <Button
            className={classNames(cls.btn, {
              [cls.active]: index === categoryIdx,
            })}
            type="button"
            theme={ButtonThemes.GREY}
            size={ButtonSizes.LG}
            onClick={handleClick(index)}
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
};
