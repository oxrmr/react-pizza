import { RoutePath } from "app/router/config/routesConfig";
import type { FC } from "react";
import { ArrowLeftSVG, PersonWithCartSVG } from "shared/assets";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { AppLinkRoles, AppLinkThemes } from "shared/ui/AppLink/types";
import cls from "./CartPage.module.scss";

export const EmptyCart: FC = () => {
  return (
    <div className={cls.emptyCart}>
      <h3 className={cls.emptyCartTitle}>Корзина порожня 😕</h3>
      <p className={cls.emptyCartAfterTitle}>
        Найімовірніше, ви не замовляли ще піцу. Для замовлення перейдіть на головну сторінку.
      </p>
      <PersonWithCartSVG className={cls.emptyCartImg} />
      <AppLink
        className={cls.emptyCartLink}
        role={AppLinkRoles.button}
        theme={AppLinkThemes.dark}
        to={RoutePath.home}
      >
        <ArrowLeftSVG /> Назад
      </AppLink>
    </div>
  );
};
