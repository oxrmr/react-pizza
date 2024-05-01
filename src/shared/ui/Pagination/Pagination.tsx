import type { FC } from 'react';
import { usePagination } from 'shared/lib/usePagination/usePagination';
import { Button, ButtonThemes } from '../Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  page,
  changePage,
}) => {
  const pagesArray = usePagination(totalPages);

  const handlePageClick = (pageNum: number) => () => changePage(pageNum);

  return (
    <ul className={cls.PaginationList}>
      {pagesArray?.map((pageNum) => (
        <li key={pageNum}>
          <Button
            className={classNames(
              cls.button,
              { [cls.active]: pageNum === page },
              []
            )}
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
