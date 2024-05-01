import { useMemo } from 'react';
import { createPagesArray } from '../createPagesArray/createPagesArray';

export const usePagination = (totalPages: number) => {
  return useMemo(() => {
    return createPagesArray(totalPages);
  }, [totalPages]);
};
