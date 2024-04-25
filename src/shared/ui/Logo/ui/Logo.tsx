import type { FC } from 'react';
import { Link } from 'react-router-dom';

import LogoSVG from 'assets/svg/logo.svg?react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Logo.module.scss';
import { RoutePath } from 'app/AppRouter/config/routesConfig';

export interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = (props) => {
  const { className = '' } = props;

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

export default Logo;
