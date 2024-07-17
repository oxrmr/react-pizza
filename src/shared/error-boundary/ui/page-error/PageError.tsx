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
      <h3 className={cls.errorMessage}>Виникла помилка 😕</h3>
      <p className={cls.afterErrorText}>Будь-ласка, оновіть сторінку.</p>
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
