export const filterOrders = (orders, filter) =>
  orders.filter(order => order.status === filter);
