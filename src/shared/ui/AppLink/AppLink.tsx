import type { FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

// eslint-disable-next-line react-refresh/only-export-components
export enum AppLinkTheme {
  MAIN = 'main',
  ACCENT = 'accent',
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className = '',
    to,
    children,
    theme = AppLinkTheme.MAIN,
    ...restProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
