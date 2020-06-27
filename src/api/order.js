import { get, put, post, patch } from "./axios";

const API_ORDERS_URL = "/orders";

export const createOrder = (clientId, order) => {
  const url = `${API_ORDERS_URL}?clientId=${clientId}`;
  return post(url, order).then((res) => res.data.data);
};
