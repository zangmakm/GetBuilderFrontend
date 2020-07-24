import { get, put, post, patch } from "./axios";
import queryString from "query-string";

const API_ORDERS_URL = "/orders";

export const createOrder = (clientId, order) => {
  const url = `${API_ORDERS_URL}?clientId=${clientId}`;
  return post(url, order).then((res) => res.data.data);
};

export const getAllOrders = (page = 1, pageSize = 5) => {
  const stringified = queryString.stringify({
    page,
    pageSize,
  });
  return get(`${API_ORDERS_URL}/?${stringified}`).then((res) => ({
    orders: res.data.data,
    pagination: res.data.pagination,
  }));
};

export const getOrder = (orderId) => {
  const url = `${API_ORDERS_URL}/${orderId}`;
  return get(url).then((res) => res.data.data);
};

export const updateBuilderOrderStatus = (orderId, builderId, status) => {
  const url = `${API_ORDERS_URL}/${orderId}/builder/${builderId}?status=${status}`;
  return patch(url, status).then((res) => res.data.data);
};

export const updateClientOrderStatus = (orderId, clientId, status) => {
  const url = `${API_ORDERS_URL}/${orderId}/client/${clientId}?status=${status}`;
  return patch(url, status).then((res) => res.data.data);
};

export const updateOrder = (orderId, order) => {
  const url = `${API_ORDERS_URL}/${orderId}`;
  return put(url, order).then((res) => res.data.data);
};

export const addOrderComment = (orderId, comments) => {
  const url = `${API_ORDERS_URL}/${orderId}/comment`;
  return post(url, comments).then((res) => res.data.data);
};
