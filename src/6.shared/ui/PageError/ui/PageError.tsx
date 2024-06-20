import type { FC } from "react";
import { ReloadSVG } from "shared/assets";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSizes, ButtonThemes } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

export interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className = "" } = props;

  const reloadPage = () => location.reload();

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <div>
        <p className={cls.errorMessage}>Виникла помилка 😕</p>
        <p className={cls.afterErrorText}>Будь-ласка, оновіть сторінку.</p>
      </div>
      <Button
        className={cls.reloadPageBtn}
        theme={ButtonThemes.LIGHT}
        outlined
        size={ButtonSizes.MD}
        onClick={reloadPage}
      >
        Оновити сторінку
        <ReloadSVG className={cls.reloadIcon} />
      </Button>
    </div>
  );
};
