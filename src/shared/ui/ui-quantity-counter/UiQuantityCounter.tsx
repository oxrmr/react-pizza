import type { FC } from 'react';

import cls from './UiQuantityCounter.module.scss';
import MinusSVG from './assets/minus-ic.svg?react';
import PlusSVG from './assets/plus-ic.svg?react';

interface QuantityCounterProps {
  id: string;
  onClickDecrement: (id: string) => () => void;
  onClickIncrement: (id: string) => () => void;
  quantity: number;
}

export const UiQuantityCounter: FC<QuantityCounterProps> = props => {
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
