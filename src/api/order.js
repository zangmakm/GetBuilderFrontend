import { get, put, post, patch } from "./axios";
import queryString from "query-string";

const API_ORDERS_URL = "/orders";

export const createOrder = (clientId, order) => {
  const url = `${API_ORDERS_URL}?clientId=${clientId}`;
  return post(url, order).then((res) => res.data.data);
};

export const getAllOrders = (page = 1, pageSize = 6) => {
  const stringified = queryString.stringify({
    page,
    pageSize,
  });
  return get(`${API_ORDERS_URL}/?${stringified}`).then((res) => ({
    orders: res.data.data,
    pagination: res.data.pagination,
  }));
};
