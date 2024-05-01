import { FC, useEffect, useState } from 'react';

import { PizzaItem, type Pizza } from 'entities/PizzaItem/ui/PizzaItem';

import { Categories } from 'features/Categories';
import { SortBy } from 'features/SortBy';

import { Section } from 'shared/ui/Section';

import cls from './HomePage.module.scss';
import { PizzasService } from '../api/PizzasService';
import { createSkeletons } from 'shared/ui/Skeleton/lib/createSkeletons';
import { calcPageCount } from 'shared/lib/calcPageCount/calcPageCount';
import { Pagination } from 'shared/ui/Pagination/Pagination';

const PIZZA_AMOUNT = 20;
const PER_PAGE = 10;

const HomePage: FC = () => {
  const [pizzasData, setPizzasData] = useState<Pizza[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [sortOption, setSortOption] = useState('');
  const totalPages = calcPageCount(PIZZA_AMOUNT, PER_PAGE);

  const handlePageClick = (currPage: number) => {
    setPage(currPage);
  };

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const data = await PizzasService.fetchAll({
          category: categoryIdx,
          sortBy: sortOption,
          limit: PER_PAGE,
          page,
        });
        setPizzasData(data);
        console.log(data);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [categoryIdx, page, sortOption]);

  return (
    <div
      className={cls.HomePage}
      data-testid='homePage'
    >
      <Section sectionClassName={cls.optionsSection}>
        <Categories
          className={cls.optionsCategories}
          onClick={setCategoryIdx}
          categoryIdx={categoryIdx}
        />
        <SortBy
          className={cls.optionsSortBy}
          onClick={setSortOption}
        />
      </Section>
      <Section
        title='Всі піцци'
        sectionClassName={cls.pizzasSection}
        titleClassName={cls.sectionTitle}
      >
        <ul className={cls.pizzaList}>
          {!isLoading
            ? pizzasData.map((pizza) => (
                <PizzaItem
                  {...pizza}
                  key={pizza.id}
                />
              ))
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
