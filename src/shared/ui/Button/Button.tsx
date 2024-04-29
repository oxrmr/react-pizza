import type { ComponentPropsWithRef, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonThemes {
  LIGHT = 'lightButton',
  GREY = 'greyButton',
}

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonSizes {
  SM = 'smallButton',
  MD = 'mediumButton',
  LG = 'largeButton',
}

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  className?: string;
  theme?: ButtonThemes;
  size?: ButtonSizes;
  outlined?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    theme = '',
    size = '',
    outlined = false,
    children,
    ...restProps
  } = props;
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
