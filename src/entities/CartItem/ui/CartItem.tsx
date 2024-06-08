import type { Pizza } from "entities/PizzaItem/ui/PizzaItem";
import cls from "./CartItem.module.scss";

export const CartItem: React.FC<Pizza> = ({ imageURL, title, price, quantity }) => {
  return (
    <li className={cls.CartItem}>
      <img
        className={cls.itemImage}
        src={imageURL}
        alt="Pizza"
        loading="lazy"
      />

      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>{/* {typeName}, {size} см. */}</p>
      </div>
      <div className="cart__item-count">
        <button
          disabled={quantity < 2}
          className="button button--outline button--circle cart__item-count-minus "
        >
          {/* <MinusSvg /> */}
        </button>
        <b>{quantity}</b>
        <button className="button button--outline button--circle cart__item-count-plus">
          {/* <PlusSvg /> */}
        </button>
      </div>
      <div className="cart__item-price">
        <b>{price * quantity} ₽</b>
      </div>
      <div className="cart__item-remove">
        <button className="button button--outline button--circle">{/* <PlusSvg /> */}</button>
      </div>
    </li>
  );
};
