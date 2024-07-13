import cls from './UiLogo.module.scss';
import LogoIcon from './assets/logo-ic.svg?react';

import { classNames } from 'shared/lib';

export interface LogoProps {
  className?: string;
}

export const UiLogo = (props: LogoProps) => {
  return (
    <div className={classNames(cls.Logo, {}, [props.className ?? ''])}>
      <LogoIcon className={cls.pizzaIcon} />
      <div className={cls.textWrapper}>
        <p className={cls.title}>React pizza</p>
        <p className={cls.afterTitle}>Сама смачна піца в усесвіті</p>
      </div>
    </div>
  );
};
