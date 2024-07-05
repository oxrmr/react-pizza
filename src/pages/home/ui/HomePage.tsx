import { FC } from 'react';

import cls from './HomePage.module.scss';

import { BugButton, ErrorBoundary } from 'app/error-boundary';
import { Categories } from 'features/categories';
import { Sort } from 'features/sort';
import { Section } from 'shared/ui';
import { ProductsList } from 'widgets/product';

const HomePage: FC = () => {
  return (
    <ErrorBoundary>
      <main className={cls.HomePage}>
        <BugButton />

        <Section sectionClassName={cls.optionsSection}>
          <Categories className={cls.optionsCategories} />
          <Sort className={cls.optionsSortBy} />
        </Section>

        <Section sectionClassName={cls.productsSection}>
          <ProductsList />
        </Section>
      </main>
    </ErrorBoundary>
  );
};

export default HomePage;
