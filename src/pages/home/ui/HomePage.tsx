import cls from './HomePage.module.scss';

import { Categories } from 'features/categories';
import { Sort } from 'features/sort';
import { BugButton, ErrorBoundary } from 'shared/error-boundary';
import { Section } from 'shared/ui';
import { ProductsList } from 'widgets/product/product-list';

export default function HomePage() {
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
}
