import axios from "axios";

const api = axios.create({
  // default configurations
  baseURL: "https://react-shop-backend.liara.run",
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;
