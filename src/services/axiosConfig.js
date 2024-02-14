import axios from "axios";

const api = axios.create({
  // default configurations
  // baseURL: "https://react-shop-backend.liara.run",
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    const {data , status} = response;
    return {data , status};
  },
  (error) => Promise.reject(error)
);

export default api;
