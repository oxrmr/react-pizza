import { RoutePath } from "app/router/config/routesConfig";
import type { FC } from "react";
import { HomeSVG } from "shared/assets";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { AppLinkRoles, AppLinkThemes } from "shared/ui/AppLink/types";
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
        to={RoutePath.home}
      >
        На головну <HomeSVG className={cls.homeIcon} />
      </AppLink>
    </div>
  );
};

export default NoRoutePage;
