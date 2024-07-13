import { useMemo } from 'react';
import { createPagesArray } from 'shared/lib/utils/createPagesArray';

export const usePagination = (totalPages: number) => {
  return useMemo(() => {
    return createPagesArray(totalPages);
  }, [totalPages]);
};
