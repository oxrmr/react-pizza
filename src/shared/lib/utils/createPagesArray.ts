export const createPagesArray = (pagesNum: number) => {
  const pages = [];
  for (let i = 1; i <= pagesNum; i++) {
    pages.push(i);
  }
  return pages;
};
