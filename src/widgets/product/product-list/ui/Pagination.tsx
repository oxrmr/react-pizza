import type { FC } from 'react';

import { PER_PAGE, PIZZA_AMOUNT } from '../model/constants';
import cls from './ProductsList.module.scss';

import { classNames, usePagination } from 'shared/lib';

interface PaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
  className?: string;
}

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  page,
  changePage,
  className = '',
}) => {
  const pagesArray = usePagination(totalPages);

  const handlePageClick = (pageNum: number) => () => changePage(pageNum);

  return (
    <>
      {PER_PAGE < PIZZA_AMOUNT && (
        <ul className={classNames(cls.paginationList, {}, [className])}>
          {pagesArray?.map(pageNum => (
            <li key={pageNum}>
              <button
                className={classNames(cls.button, { [cls.active]: pageNum === page }, [])}
                onClick={handlePageClick(pageNum)}
              >
                {pageNum}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
