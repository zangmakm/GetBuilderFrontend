import { get, put, post } from "./axios";
import queryString from "query-string";

const API_CLIENTS_URL = "/clients";

export const createClient = (client) => {
  return post(API_CLIENTS_URL, client).then((res) => res.data.data);
};

export const getClient = (clientId) => {
  const url = `${API_CLIENTS_URL}/${clientId}`;
  return get(url).then((res) => res.data.data);
};

export const updateClient = (clientId, client) => {
  const url = `${API_CLIENTS_URL}/${clientId}`;
  return put(url, client).then((res) => res.data.data);
};

export const getClientOrders = (clientId, page = 1, pageSize = 6, status) => {
  const stringified = queryString.stringify({
    page,
    pageSize,
    status,
  });
  const url = `${API_CLIENTS_URL}/${clientId}/orders/?${stringified}`;

  return get(url).then((res) => ({
    orders: res.data.data,
    pagination: res.data.pagination,
    status: res.data.search,
  }));
};
