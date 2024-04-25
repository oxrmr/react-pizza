import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import { PizzaItem, type Pizza } from 'entities/PizzaItem/ui/PizzaItem';

import { Categories } from 'features/Categories';
import { SortBy } from 'features/SortBy';

import { classNames } from 'shared/lib/classNames/classNames';
import { Section } from 'shared/ui/Section';

import cls from './HomePage.module.scss';

const HomePage: FC = () => {
  const pizzasData = useLoaderData() as Pizza[];

  return (
    <div
      className={cls.HomePage}
      data-testid='homePage'
    >
      <ul className={classNames(cls.optionsList, {}, [])}>
        <li>
          <Categories className={cls.optionsItemCategories} />
        </li>
        <li>
          <SortBy className={cls.optionsItemSortBy} />
        </li>
      </ul>
      <Section
        title='Всі піцци'
        sectionClassName={cls.pizzaSection}
        titleClassName={cls.sectionTitle}
      >
        <ul className={cls.pizzaList}>
          {pizzasData.map((pizza) => (
            <PizzaItem
              {...pizza}
              key={pizza.id}
            />
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default HomePage;

// export const homePageLoader = async () => {
//   const { data } = await axios.get<Pizza[]>(
//     'https://648f0cf375a96b664444a0cb.mockapi.io/pizzas'
//   );

//   return data;
// };
