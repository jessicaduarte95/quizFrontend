import axios from "axios";

const api = axios.create({
  baseURL: process.env.DOMAIN,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepta requisições
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercepta respostas
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
