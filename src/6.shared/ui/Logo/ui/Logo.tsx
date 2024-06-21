import type { FC } from "react";
import { Link } from "react-router-dom";

import { RoutePath } from "app/router/config/routesConfig";
import { LogoSVG } from "shared/assets";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Logo.module.scss";

export interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = (props) => {
  const { className = "" } = props;

  return (
    <Link
      to={RoutePath.home}
      className={classNames(cls.Logo, {}, [className])}
    >
      <LogoSVG className={cls.pizzaIcon} />
      <div className={cls.textWrapper}>
        <h2 className={cls.title}>React pizza</h2>
        <p className={cls.afterTitle}>Сама смачна піца в усесвіті</p>
      </div>
    </Link>
  );
};
