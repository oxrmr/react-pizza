import type { ComponentPropsWithRef, FC } from 'react';

import cls from './Button.module.scss';
import type { ButtonSizes, ButtonThemes } from './types';

import { classNames } from 'shared/lib/utils/classNames/classNames';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  className?: string;
  theme?: ButtonThemes;
  size?: ButtonSizes;
  outlined?: boolean;
}

export const Button: FC<ButtonProps> = props => {
  const { className = '', theme = '', size = '', outlined = false, children, ...restProps } = props;
  return (
    <button
      className={classNames(cls.Button, { [cls.outlined]: outlined }, [
        className,
        cls[theme],
        cls[size],
      ])}
      {...restProps}
    >
      {children}
    </button>
  );
};
