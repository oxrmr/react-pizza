import { classNames } from "shared/lib/utils/classNames/classNames";
import cls from "./Logo.module.scss";
import LogoIcon from "./logo-ic.svg?react";

export interface LogoProps {
  className?: string;
}

export const Logo = (props: LogoProps) => {
  return (
    <div className={classNames(cls.Logo, {}, [props.className ?? ""])}>
      <LogoIcon className={cls.pizzaIcon} />
      <div className={cls.textWrapper}>
        <p className={cls.title}>React pizza</p>
        <p className={cls.afterTitle}>Сама смачна піца в усесвіті</p>
      </div>
    </div>
  );
};
