import type { FC } from 'react';

import cls from './CartPage.module.scss';

import { ArrowLeftSVG, PersonWithCartSVG } from 'shared/assets';
import { routesPath } from 'shared/router';
import { UiLink, UiLinkThemes, UiLinkVariants } from 'shared/ui';

export const EmptyCart: FC = () => {
  return (
    <div className={cls.emptyCart}>
      <h3 className={cls.emptyCartTitle}>Корзина порожня 😕</h3>
      <p className={cls.emptyCartAfterTitle}>
        Найімовірніше, ви не замовляли ще піцу. Для замовлення перейдіть на головну
        сторінку.
      </p>
      <PersonWithCartSVG className={cls.emptyCartImg} />
      <UiLink
        className={cls.emptyCartLink}
        role={UiLinkVariants.button}
        theme={UiLinkThemes.dark}
        to={routesPath.home}
      >
        <ArrowLeftSVG /> Назад
      </UiLink>
    </div>
  );
};
