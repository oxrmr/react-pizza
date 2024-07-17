import {
  fetchProducts,
  selectProducts,
  selectProductsError,
  selectProductsFetchStatus,
} from 'entities/product/product-card';
import { selectCategoryIndex } from 'features/categories';
import { selectSortOption } from 'features/sort';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { calcPageCount } from 'shared/lib/utils/calcPageCount';
import { PER_PAGE, PIZZA_AMOUNT } from '../../model/constants';

export const useProductsData = () => {
  const [page, setPage] = useState(1);
  const totalPages = calcPageCount(PIZZA_AMOUNT, PER_PAGE);
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectProducts);
  const error = useAppSelector(selectProductsError);
  const isFetching = useAppSelector(selectProductsFetchStatus);
  const categoryIndex = useAppSelector(selectCategoryIndex);
  const sortOption = useAppSelector(selectSortOption);

  const changePage = (currPage: number) => {
    setPage(currPage);
  };

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: categoryIndex,
        sortBy: sortOption,
        limit: PER_PAGE,
        page,
      })
    );
  }, [categoryIndex, dispatch, page, sortOption]);

  return {
    productData,
    totalPages,
    error,
    isFetching,
    changePage,
    page,
  };
};
