import { useEffect, useState, type FC } from 'react';

import { createSkeletonsList } from '../lib/createSkeletonsList';
import { PER_PAGE, PIZZA_AMOUNT } from '../model/constants';
import { Pagination } from './pagination/Pagination';
import cls from './ProductsList.module.scss';

import type { ICartItem } from 'entities/cart/cart-product-card';
import {
  fetchProducts,
  ProductCard,
  selectProducts,
  selectProductsError,
  selectProductsFetchStatus,
} from 'entities/product/product-card';
import { AddToCart } from 'features/cart';
import { selectCategoryIndex } from 'features/categories';
import { selectSortOption } from 'features/sort';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { calcPageCount } from 'shared/lib/utils/calcPageCount/calcPageCount';
import { Section } from 'shared/ui';

export const ProductsList: FC = () => {
  const [page, setPage] = useState(1);
  const totalPages = calcPageCount(PIZZA_AMOUNT, PER_PAGE);
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectProducts);
  const error = useAppSelector(selectProductsError);
  const isFetching = useAppSelector(selectProductsFetchStatus);
  const categoryIndex = useAppSelector(selectCategoryIndex);
  const sortOption = useAppSelector(selectSortOption);

  const handlePageClick = (currPage: number) => {
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

  const addToCartAction = (orderedItem: ICartItem) => {
    return <AddToCart itemToAdd={orderedItem} />;
  };

  return (
    <Section
      sectionClassName={cls.ProductsSection}
      titleClassName={cls.sectionTitle}
      title='Всі піцци'
    >
      {error && <div style={{ display: 'flex', justifyContent: 'center' }}>{error}</div>}

      <ul className={cls.productsList}>
        {isFetching
          ? createSkeletonsList(PER_PAGE, cls.productList)
          : productData?.map(pizza => (
              <ProductCard
                productData={pizza}
                addToCartSlot={addToCartAction}
                key={pizza.id}
              />
            ))}
      </ul>

      {PER_PAGE < PIZZA_AMOUNT && (
        <Pagination
          className={cls.paginationOffsetTop}
          totalPages={totalPages}
          page={page}
          changePage={handlePageClick}
        />
      )}
    </Section>
  );
};
