import type { ComponentPropsWithRef, FC } from "react";

import { classNames } from "shared/lib/utils/classNames/classNames";
import cls from "./Button.module.scss";
import type { ButtonSizes, ButtonThemes } from "./types";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  className?: string;
  theme?: ButtonThemes;
  size?: ButtonSizes;
  outlined?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className = "", theme = "", size = "", outlined = false, children, ...restProps } = props;
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
