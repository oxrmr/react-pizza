export const generateOrderId = (orderData: { id: number; type: string; size: number }): string => {
  return `id${orderData.id}type${orderData.type}size${orderData.size}`;
};
