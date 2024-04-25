import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";

export interface PageErrorProps {
  className?: string;
}

export const PageError = (props: PageErrorProps) => {
  const { className = "" } = props;

  const reloadPage = () => location.reload();

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p className={cls.message}>page error</p>
      <button onClick={reloadPage}>page reload</button>
    </div>
  );
};
