import type { ComponentPropsWithRef, FC } from 'react';

import cls from './UiButton.module.scss';
import { UiButtonSizes, UiButtonThemes } from './model/types';

import { classNames } from 'shared/lib/utils/classNames';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  className?: string;
  theme?: UiButtonThemes;
  size?: UiButtonSizes;
  outlined?: boolean;
}

export const UiButton: FC<ButtonProps> = props => {
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
