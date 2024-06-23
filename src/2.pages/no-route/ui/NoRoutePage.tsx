import type { FC } from "react";

import { HomeSVG } from "shared/assets";
import { routesPath } from "shared/router";
import { AppLink } from "shared/ui/app-link/AppLink";
import { AppLinkRoles, AppLinkThemes } from "shared/ui/app-link/types";
import cls from "./NoRoutePage.module.scss";

const NoRoutePage: FC = () => {
  return (
    <div className={cls.NoRoutePage}>
      <h2 className={cls.title}>В нашому магазині відсутній даний маршрут.</h2>
      <p className={cls.aftertitle}>
        Будь-ласка, введіть правильний адрес, або перейдіть на головну сторінку.
      </p>
      <AppLink
        className={cls.goHomeLink}
        role={AppLinkRoles.button}
        theme={AppLinkThemes.dark}
        to={routesPath.home}
      >
        На головну <HomeSVG className={cls.homeIcon} />
      </AppLink>
    </div>
  );
};

export default NoRoutePage;
