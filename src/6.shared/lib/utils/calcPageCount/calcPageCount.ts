export const calcPageCount = (totalItems: number, perPage: number) => {
  return Math.ceil(totalItems / perPage);
};
