import { RoutePath } from "app/AppRouter/config/routesConfig";
import type { FC } from "react";
import { HomeSVG } from "shared/assets";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { LinkRoles, LinkThemes } from "shared/ui/AppLink/types";
import cls from "./NoRoutePage.module.scss";

const NoRoutePage: FC = () => {
  return (
    <div className={cls.NoRoutePage}>
      <h2 className={cls.title}>В нашому магазині відсутній даний маршрут.</h2>
      <p className={cls.aftertitle}>
        Будь-ласка, введіть правельний адрес, або перейдіть на головну сторінку.
      </p>
      <AppLink
        className={cls.goHomeLink}
        role={LinkRoles.button}
        theme={LinkThemes.dark}
        to={RoutePath.home}
      >
        На головну <HomeSVG className={cls.homeIcon} />
      </AppLink>
    </div>
  );
};

export default NoRoutePage;
