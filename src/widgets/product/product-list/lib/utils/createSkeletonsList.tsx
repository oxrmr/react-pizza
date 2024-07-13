import { UiSkeleton } from 'shared/ui';

export const createSkeletonsList = (amount: number, className: string = '') => {
  return Array(amount)
    .fill(null)
    .map((_, index) => (
      <UiSkeleton
        key={index}
        className={className}
      />
    ));
};
