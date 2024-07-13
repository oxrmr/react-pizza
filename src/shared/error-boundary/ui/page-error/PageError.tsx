import type { FC } from 'react';

import cls from './PageError.module.scss';

import { ReloadSVG } from 'shared/assets';
import { classNames } from 'shared/lib';
import { UiButton, UiButtonSizes, UiButtonThemes } from 'shared/ui';

export interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = props => {
  const { className = '' } = props;

  const reloadPage = () => location.reload();

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <div>
        <p className={cls.errorMessage}>Виникла помилка 😕</p>
        <p className={cls.afterErrorText}>Будь-ласка, оновіть сторінку.</p>
      </div>
      <UiButton
        className={cls.reloadPageBtn}
        theme={UiButtonThemes.LIGHT}
        outlined
        size={UiButtonSizes.MD}
        onClick={reloadPage}
      >
        Оновити сторінку
        <ReloadSVG className={cls.reloadIcon} />
      </UiButton>
    </div>
  );
};
