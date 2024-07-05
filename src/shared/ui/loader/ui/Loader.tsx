/* eslint-disable react-refresh/only-export-components */
import type { FC } from "react";
import { classNames } from "shared/lib/utils/classNames/classNames";
import cls from "./Loader.module.scss";

export enum LoaderSizes {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export enum LoaderPositioning {
  RELATIVE = "relative",
  ABSOLUTE = "absolute",
  FIXED = "fixed",
}

interface LoaderProps {
  size: string;
  positioning: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { size, positioning } = props;
  return <div className={classNames(cls.Loader, {}, [cls[size], cls[positioning]])}></div>;
};
