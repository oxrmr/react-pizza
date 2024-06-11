import type { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { usePagination } from "shared/lib/usePagination/usePagination";
import { Button, ButtonThemes } from "../Button/Button";

import cls from "./Pagination.module.scss";

interface PaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
  className: string;
}

export const Pagination: FC<PaginationProps> = ({ className, totalPages, page, changePage }) => {
  const pagesArray = usePagination(totalPages);

  const handlePageClick = (pageNum: number) => () => changePage(pageNum);

  return (
    <ul className={classNames(cls.PaginationList, {}, [className])}>
      {pagesArray?.map((pageNum) => (
        <li key={pageNum}>
          <Button
            className={classNames(cls.button, { [cls.active]: pageNum === page }, [])}
            theme={ButtonThemes.LIGHT}
            outlined
            onClick={handlePageClick(pageNum)}
          >
            {pageNum}
          </Button>
        </li>
      ))}
    </ul>
  );
};
