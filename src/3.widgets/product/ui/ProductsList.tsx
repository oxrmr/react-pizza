import type { FC } from "react";

import type { OrderItem } from "entities/cart/cart-product-card";
import { ProductCard, type Product } from "entities/product/product-card";
import { AddToCart } from "features/cart";
import { Section } from "shared/ui";
import { createSkeletonsList } from "../lib/createSkeletonsList";
import cls from "./ProductsList.module.scss";

interface ProductsListListProps {
  perPage: number;
  isLoading: boolean;
  productData: Product[];
}

export const ProductsList: FC<ProductsListListProps> = (props) => {
  const { perPage, isLoading, productData } = props;

  const action = (item: OrderItem, id: string) => {
    return (
      <AddToCart
        item={item}
        orderId={id}
      />
    );
  };

  return (
    <Section
      title="Всі піцци"
      sectionClassName={cls.ProductsSection}
      titleClassName={cls.sectionTitle}
    >
      <ul className={cls.productsList}>
        {!isLoading
          ? productData?.map((pizza) => (
              <ProductCard
                productData={pizza}
                action={action}
                key={pizza.id}
              />
            ))
          : createSkeletonsList(perPage, cls.productList)}
      </ul>
    </Section>
  );
};
