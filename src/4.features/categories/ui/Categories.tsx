import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSizes, ButtonThemes } from "shared/ui/Button/Button";
import { selectCategoryIndex } from "../model/selectors/selectCategoryIndex/selectCategoryIndex";
import { categoriesActions } from "../model/slice/categoriesSlice";
import cls from "./Categories.module.scss";
import { useAppDispatch } from "shared/lib";

export interface CategoriesProps {
  className?: string;
}
const CATEGORIES = ["Всі", "М'ясні", "Вегетарианські", "На Грилі", "Гострі", "Закриті"];

export const Categories = (props: CategoriesProps) => {
  const { className = "" } = props;

  const dispatch = useAppDispatch();
  const categoryIdx = useSelector(selectCategoryIndex);

  const handleClick = (index: number) => () => {
    dispatch(categoriesActions.setCategory(index));
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
