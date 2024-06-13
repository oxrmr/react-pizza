import type { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className = "", to, children, ...restProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
