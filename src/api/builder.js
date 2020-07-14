import { del, get, put, post } from "./axios";
import mockImg from "../homepage/assets/builder-profile.jpg";

const API_BUILDER_URL = "/builders";

export const fetchBuilders = () => {
  const url = `${API_BUILDER_URL}`;
  return get(url).then((res) => ({
    builders: res.data.data.map((builder) => ({ ...builder, image: mockImg })),
  }));
};

export const createBuilder = (builder) => {
  return post(API_BUILDER_URL, builder).then((res) => res.data);
};

export const getBuilder = (builderId) => {
  const url = `${API_BUILDER_URL}/${builderId}`;
  return get(url).then((res) => res.data);
};

export const updateBuilder = (builderId, builder) => {
  const url = `${API_BUILDER_URL}/${builderId}`;
  return put(url, builder).then((res) => res.data);
};
