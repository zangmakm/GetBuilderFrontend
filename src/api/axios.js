import axios from "axios";

axios.defaults.baseURL = "https://get-builder.herokuapp.com/api";

export const get = (url) => axios.get(url);

export const post = (url, data) => axios.post(url, data);

export const put = (url, data) => axios.put(url, data);

export const del = (url) => axios.delete(url);
