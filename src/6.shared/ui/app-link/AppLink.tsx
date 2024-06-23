import type { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/utils/classNames/classNames";
import cls from "./AppLink.module.scss";

export interface AppLinkProps extends LinkProps {
  className?: string;
  role?: string;
  theme?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className = "", to, children, role = "", theme = "", ...restProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[role], cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
