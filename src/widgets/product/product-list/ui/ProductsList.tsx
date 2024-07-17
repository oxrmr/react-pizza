import { type FC } from 'react';

import { PER_PAGE } from '../model/constants';
import cls from './ProductsList.module.scss';

import type { ICartItem } from 'entities/cart/cart-product-card';
import { ProductCard } from 'entities/product/product-card';
import { AddToCart } from 'features/cart/add-to-cart';
import { Section } from 'shared/ui';
import { useProductsData } from '../lib/hooks/useProductsData';
import { createSkeletonsList } from '../lib/utils/createSkeletonsList';
import { Pagination } from './Pagination';

export const ProductsList: FC = () => {
  const { error, isFetching, productData, totalPages, page, changePage } = useProductsData();

  const addToCartAction = (orderedItem: ICartItem) => {
    return <AddToCart itemToAdd={orderedItem} />;
  };

  return (
    <Section
      sectionClassName={cls.ProductsSection}
      titleClassName={cls.sectionTitle}
      title='Всі піцци'
    >
      {error && <div>{error}</div>}

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

      <Pagination
        className={cls.paginationOffsetTop}
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </Section>
  );
};
