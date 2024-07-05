import { Skeleton } from '../../../shared/ui/skeleton/Skeleton';

export const createSkeletonsList = (amount: number, className: string = '') => {
  return Array(amount)
    .fill(null)
    .map((_, index) => (
      <Skeleton
        key={index}
        className={className}
      />
    ));
};
