import { PizzaItem } from "entities/PizzaItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../model/selectors/selectCartItems/selectCartItems";

export const Cart = () => {
  const cartTotalItems = useSelector(selectCartItems);
  return (
    <ul>
      {cartTotalItems.map((item) => (
        <PizzaItem
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  );
};
