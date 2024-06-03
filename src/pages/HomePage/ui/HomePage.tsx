import { FC, useEffect, useState } from "react";

import { PizzaItem } from "entities/PizzaItem/ui/PizzaItem";

import { Categories } from "features/Categories";
import { SortBy } from "features/SortBy";
import { calcPageCount } from "shared/lib/calcPageCount/calcPageCount";
import { Pagination } from "shared/ui/Pagination/Pagination";
import { Section } from "shared/ui/Section";
import { createSkeletons } from "shared/ui/Skeleton/lib/createSkeletons";

import { useAppDispatch } from "app/providers/StoreProvider/config/hooks/useAppDispatch";
import { selectAllItems } from "entities/PizzaItem/model/selectors/selectAllItems/selectAllItems";
import { selectError } from "entities/PizzaItem/model/selectors/selectError/selectError";
import { selectIsLoading } from "entities/PizzaItem/model/selectors/selectIsLoading/selectIsLoading";
import { fetchPizzas } from "entities/PizzaItem/model/thunks/fetchPizzas";
import { useSelector } from "react-redux";
import cls from "./HomePage.module.scss";

const PIZZA_AMOUNT = 20;
const PER_PAGE = 8;

const HomePage: FC = () => {
  const [page, setPage] = useState(1);
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [sortOption, setSortOption] = useState("");
  const dispatch = useAppDispatch();
  const pizzaItems = useSelector(selectAllItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const totalPages = calcPageCount(PIZZA_AMOUNT, PER_PAGE);

  const handlePageClick = (currPage: number) => {
    setPage(currPage);
  };

  useEffect(() => {
    dispatch(
      fetchPizzas({
        category: categoryIdx,
        sortBy: sortOption,
        limit: PER_PAGE,
        page,
      })
    );
  }, [categoryIdx, dispatch, page, sortOption]);

  return (
    <div className={cls.HomePage} data-testid="homePage">
      <Section sectionClassName={cls.optionsSection}>
        <Categories
          className={cls.optionsCategories}
          onClick={setCategoryIdx}
          categoryIdx={categoryIdx}
        />
        <SortBy className={cls.optionsSortBy} onClick={setSortOption} />
      </Section>
      <Section
        title="Всі піцци"
        sectionClassName={cls.pizzasSection}
        titleClassName={cls.sectionTitle}
      >
        <ul className={cls.pizzaList}>
          {!isLoading
            ? pizzaItems.map((pizza) => <PizzaItem {...pizza} key={pizza.id} />)
            : createSkeletons(PER_PAGE)}
        </ul>
      </Section>
      {error && <div>{error}</div>}
      {PER_PAGE < PIZZA_AMOUNT ? (
        <Section sectionClassName={cls.paginationSection}>
          <Pagination
            totalPages={totalPages}
            page={page}
            changePage={handlePageClick}
          />
        </Section>
      ) : null}
    </div>
  );
};

export default HomePage;
