import type { FC } from 'react';
import cls from './QuantityCounter.module.scss';
import MinusSVG from './minus-ic.svg?react';
import PlusSVG from './plus-ic.svg?react';

interface QuantityCounterProps {
  id: string;
  onClickDecrement: (id: string) => () => void;
  onClickIncrement: (id: string) => () => void;
  quantity: number;
}

export const QuantityCounter: FC<QuantityCounterProps> = (props) => {
  const { id, onClickDecrement, onClickIncrement, quantity } = props;
  return (
    <div className={cls.quantityCounter}>
      <button
        className={cls.decreaseBtn}
        type='button'
        onClick={onClickDecrement(id)}
      >
        <MinusSVG className={cls.minusIcon} />
      </button>
      <p className={cls.quantity}>{quantity}</p>
      <button
        className={cls.increaseBtn}
        type='button'
        onClick={onClickIncrement(id)}
      >
        <PlusSVG className={cls.plusIcon} />
      </button>
    </div>
  );
};
