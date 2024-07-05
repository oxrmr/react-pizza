export const generateCartItemId = (id: number, type: string, size: number): string => {
  return `id${id}type${type}size${size}`;
};
