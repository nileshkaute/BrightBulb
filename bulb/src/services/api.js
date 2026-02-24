import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem("userInfo");
  const adminToken = localStorage.getItem("adminToken");

  // Use adminToken for admin routes if it exists, otherwise use user token
  const token = userInfo ? JSON.parse(userInfo).token : adminToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (data) => api.post("/users/login", data),
  register: (data) => api.post("/users", data),
  adminLogin: (data) => api.post("/admin/login", data),
  getProfile: () => api.get("/users/profile"),
};

export const productsAPI = {
  getAll: () => api.get("/products"),
  getFeatured: () => api.get("/products/featured"),
  create: (data) => api.post("/products", data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
};

export const ordersAPI = {
  createOrder: (order) => api.post("/orders", order),
  getById: (id) => api.get(`/orders/${id}`),
  getMyOrders: () => api.get("/orders/myorders"),
};

export const subscribersAPI = {
  getAll: () => api.get("/subscribers"),
  subscribe: (email) => api.post("/subscribers", { email }),
};

export const pagesAPI = {
  getPage: (pageName) => api.get(`/pages/${pageName}`),
  updatePage: (data) => api.post("/pages", data),
};

export default api;
