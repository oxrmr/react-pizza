import { FC, useEffect, useState } from "react";

import { BugButton, ErrorBoundary } from "app/error-boundary";
import {
  fetchProducts,
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from "entities/product/product-card";
import { Categories } from "features/categories";
import { selectCategoryIndex } from "features/categories/model/selectors/selectCategoryIndex/selectCategoryIndex";
import { Pagination } from "features/product/pagination/Pagination";
import { Sort } from "features/sort";
import { selectSortOption } from "features/sort/model/selectors/selectSortOption/selectSortOption";
import { useAppDispatch, useAppSelector } from "shared/lib";
import { calcPageCount } from "shared/lib/utils/calcPageCount/calcPageCount";
import { Section } from "shared/ui";
import { Header } from "widgets/header";
import { ProductsList } from "widgets/product";
import cls from "./HomePage.module.scss";

const PIZZA_AMOUNT = 20;
const PER_PAGE = 8;

const HomePage: FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const productData = useAppSelector(selectProducts);
  const isLoading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  const categoryIndex = useAppSelector(selectCategoryIndex);
  const sortOption = useAppSelector(selectSortOption);
  const totalPages = calcPageCount(PIZZA_AMOUNT, PER_PAGE);

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

  return (
    <ErrorBoundary>
      <Header />

      <main className={cls.HomePage}>
        {error && <div>{error}</div>}

        <BugButton />

        <Section sectionClassName={cls.optionsSection}>
          <Categories className={cls.optionsCategories} />
          <Sort className={cls.optionsSortBy} />
        </Section>

        {/* TODO: Set dynamic title */}
        <ProductsList
          isLoading={isLoading}
          perPage={PER_PAGE}
          productData={productData}
        />
        {PER_PAGE < PIZZA_AMOUNT && (
          <Pagination
            className={cls.pagination}
            totalPages={totalPages}
            page={page}
            changePage={handlePageClick}
          />
        )}
      </main>
    </ErrorBoundary>
  );
};

export default HomePage;
