import type { FC } from 'react';

import cls from './RemoveButton.module.scss';
import RemoveSVG from './close-ic.svg?react';

interface RemoveButtonProps {
  id: string;
  onClick: (id: string) => () => void;
}

export const RemoveButton: FC<RemoveButtonProps> = (props) => {
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
