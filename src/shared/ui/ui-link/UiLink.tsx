import type { FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/utils/classNames';
import cls from './UiLink.module.scss';

export interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: string;
  theme?: string;
}

export const UiLink: FC<AppLinkProps> = props => {
  const { className = '', to, children, variant = '', theme = '' } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[variant], cls[theme]])}
    >
      {children}
    </Link>
  );
};
