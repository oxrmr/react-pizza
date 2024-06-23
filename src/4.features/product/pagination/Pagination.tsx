import type { FC } from "react";
import { classNames } from "shared/lib/utils/classNames/classNames";

import cls from "./Pagination.module.scss";
import { usePagination } from "shared/lib/hooks/usePagination/usePagination";
import { Button, ButtonThemes } from "shared/ui";

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
