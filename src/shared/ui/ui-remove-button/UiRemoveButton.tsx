import type { FC } from 'react';

import cls from './UiRemoveButton.module.scss';
import RemoveSVG from './assets/close-ic.svg?react';

interface RemoveButtonProps {
  id: string;
  onClick: (id: string) => () => void;
}

export const UiRemoveButton: FC<RemoveButtonProps> = props => {
  const { id, onClick } = props;

  return (
    <button
      className={cls.removeBtn}
      type='button'
      onClick={onClick(id)}
    >
      <RemoveSVG className={cls.removeIcon} />
    </button>
  );
};
