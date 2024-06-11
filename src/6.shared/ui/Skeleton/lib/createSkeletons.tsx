import { Skeleton } from '../ui/Skeleton';

export const createSkeletons = (amount: number) => {
  return Array(amount)
    .fill(null)
    .map((_, idx) => (
      <Skeleton
        key={idx}
        className='pizza-item'
      />
    ));
};
