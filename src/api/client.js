import { get, put, post } from "./axios";

const API_CLIENTS_URL = "/clients";

export const createClient = (client) => {
  return post(API_CLIENTS_URL, client).then((res) => res.data);
};

export const getClient = (clientId) => {
  const url = `${API_CLIENTS_URL}/${clientId}`;
  return get(url).then((res) => res.data);
};
