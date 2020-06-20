import { del, get, put, post } from "./axios";
import mockImg from "../homepage/assets/builder-profile.jpg";

const API_BUILDER_URL = "/builders";

export const fetchBuilders = () => {
  const url = `${API_BUILDER_URL}`;
  return get(url).then((res) => ({
    builders: res.data.data.map((builder) => ({ ...builder, image: mockImg })),
  }));
};
