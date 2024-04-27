import { FC, useEffect, useState } from 'react';

import { PizzaItem, type Pizza } from 'entities/PizzaItem/ui/PizzaItem';

import { Categories } from 'features/Categories';
import { SortBy } from 'features/SortBy';

import { classNames } from 'shared/lib/classNames/classNames';
import { Section } from 'shared/ui/Section';

import cls from './HomePage.module.scss';
import { PizzasService } from '../api/PizzasService';

const HomePage: FC = () => {
  const [pizzasData, setPizzasData] = useState<Pizza[]>();
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchPizzas = async () => {
      await PizzasService.fetchAll(categoryIdx, sortOption).then((data) =>
        setPizzasData(data)
      );
    };
    fetchPizzas();
  }, [categoryIdx, sortOption]);

  return (
    <div
      className={cls.HomePage}
      data-testid='homePage'
    >
      <ul className={classNames(cls.optionsList, {}, [])}>
        <li>
          <Categories
            className={cls.optionsItemCategories}
            onClick={setCategoryIdx}
            categoryIdx={categoryIdx}
          />
        </li>
        <li>
          <SortBy
            className={cls.optionsItemSortBy}
            onClick={setSortOption}
          />
        </li>
      </ul>
      <Section
        title='Всі піцци'
        sectionClassName={cls.pizzaSection}
        titleClassName={cls.sectionTitle}
      >
        <ul className={cls.pizzaList}>
          {pizzasData ? (
            pizzasData.map((pizza) => (
              <PizzaItem
                {...pizza}
                key={pizza.id}
              />
            ))
          ) : (
            <div></div>
          )}
        </ul>
      </Section>
    </div>
  );
};

export default HomePage;
