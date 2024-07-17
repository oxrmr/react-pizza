import type { FC } from 'react';

import cls from './CartPage.module.scss';

import { ArrowLeftSVG, PersonWithCartSVG } from 'shared/assets';
import { ErrorBoundary } from 'shared/error-boundary';
import { routesPath } from 'shared/router';
import { UiLink, UiLinkThemes, UiLinkVariants } from 'shared/ui';

export const EmptyCart: FC = () => {
  return (
    <ErrorBoundary>
      <div className={cls.emptyCart}>
        <h3 className={cls.emptyCartTitle}>Корзина порожня 😕</h3>
        <p className={cls.emptyCartAfterTitle}>
          Найімовірніше, ви ще не замовили піцу. Для замовлення перейдіть на головну сторінку.
        </p>
        <PersonWithCartSVG className={cls.emptyCartImg} />
        <UiLink
          className={cls.emptyCartLink}
          variant={UiLinkVariants.button}
          theme={UiLinkThemes.dark}
          to={routesPath.home}
        >
          <ArrowLeftSVG /> Назад
        </UiLink>
      </div>
    </ErrorBoundary>
  );
};
