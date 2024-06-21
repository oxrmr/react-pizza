import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { BugButton } from "app/providers/error-boundary";
import { RoutePath } from "app/router/config/routesConfig";
import { ProductCard } from "entities/product/ProductCard";
import { selectCartTotalPrice } from "features/cart/model/selectors/selectCartTotalPrice/selectCartTotalPrice";
import { Categories } from "features/categories";
import { selectCategoryIndex } from "features/categories/model/selectors/selectCategoryIndex/selectCategoryIndex";
import { selectIsLoading } from "features/product/model/selectors/selectIsLoading/selectIsLoading";
import { selectPizzaData } from "features/product/model/selectors/selectPizzaData/selectAllItems";
import { selectPizzasFetchingError } from "features/product/model/selectors/selectPizzasFetchingError/selectPizzasFetchingError";
import { fetchPizzas } from "features/product/model/thunks/fetchPizzas";
import { Sort } from "features/sort";
import { selectSortOption } from "features/sort/model/selectors/selectSortOption/selectSortOption";
import { CartSVG } from "shared/assets";
import { useAppDispatch } from "shared/lib";
import { calcPageCount } from "shared/lib/calcPageCount/calcPageCount";
import { Logo } from "shared/ui";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { AppLinkRoles, AppLinkThemes } from "shared/ui/AppLink/types";
import { Pagination } from "shared/ui/Pagination/Pagination";
import { Section } from "shared/ui/Section";
import { createSkeletons } from "shared/ui/Skeleton/lib/createSkeletons";
import cls from "./HomePage.module.scss";
import { selectCartItemsQuantity } from "features/cart/model/selectors/selectCartItemsQuantity/selectCartItemsQuantity";

const PIZZA_AMOUNT = 20;
const PER_PAGE = 8;

const HomePage: FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const pizzaData = useSelector(selectPizzaData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectPizzasFetchingError);
  const categoryIndex = useSelector(selectCategoryIndex);
  const sortOption = useSelector(selectSortOption);
  const cartTotalItems = useSelector(selectCartItemsQuantity);
  const cartTotalPrice = useSelector(selectCartTotalPrice);
  const totalPages = calcPageCount(PIZZA_AMOUNT, PER_PAGE);

  const handlePageClick = (currPage: number) => {
    setPage(currPage);
  };
  useEffect(() => {
    dispatch(
      fetchPizzas({
        category: categoryIndex,
        sortBy: sortOption,
        limit: PER_PAGE,
        page,
      })
    );
  }, [categoryIndex, dispatch, page, sortOption]);

  return (
    <main className={cls.HomePage}>
      <header className="header">
        <Logo className="header__logo" />
        {location.pathname === RoutePath.home && (
          <AppLink
            className="header__cart-link header-cart-link"
            role={AppLinkRoles.button}
            theme={AppLinkThemes.accent}
            to={RoutePath.cart}
          >
            <span className="header-cart-link__price">{cartTotalItems} ₴</span>
            <CartSVG className="header-cart-link__cartSvg" />
            <span className="header-cart-link__ quantity">{cartTotalPrice}</span>
          </AppLink>
        )}
      </header>

      {error && <div>{error}</div>}

      <BugButton />

      <Section sectionClassName={cls.optionsSection}>
        <Categories className={cls.optionsCategories} />
        <Sort className={cls.optionsSortBy} />
      </Section>

      {/* TODO: Set dynamic title */}
      <Section
        title="Всі піцци"
        sectionClassName={cls.pizzasSection}
        titleClassName={cls.sectionTitle}
      >
        <ul className={cls.pizzaList}>
          {!isLoading
            ? pizzaData?.map((pizza) => (
                <ProductCard
                  productData={pizza}
                  key={pizza.id}
                />
              ))
            : createSkeletons(PER_PAGE)}
        </ul>
      </Section>

      {PER_PAGE < PIZZA_AMOUNT && (
        <Pagination
          className={cls.pagination}
          totalPages={totalPages}
          page={page}
          changePage={handlePageClick}
        />
      )}
    </main>
  );
};

export default HomePage;
