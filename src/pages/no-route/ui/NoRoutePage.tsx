import type { FC } from 'react';

import cls from './NoRoutePage.module.scss';

import { HomeSVG } from 'shared/assets';
import { routesPath } from 'shared/router';
import { UiLink, UiLinkVariants, UiLinkThemes } from 'shared/ui';

const NoRoutePage: FC = () => {
  return (
    <div className={cls.NoRoutePage}>
      <h3 className={cls.title}>В нашому магазині відсутній даний маршрут.</h3>
      <p className={cls.aftertitle}>
        Будь-ласка, введіть правильний адрес, або перейдіть на головну сторінку.
      </p>
      <UiLink
        className={cls.goHomeLink}
        role={UiLinkVariants.button}
        theme={UiLinkThemes.dark}
        to={routesPath.home}
      >
        На головну <HomeSVG className={cls.homeIcon} />
      </UiLink>
    </div>
  );
};

export default NoRoutePage;
