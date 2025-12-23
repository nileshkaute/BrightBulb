import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: (credentials) => api.post("/admin/login", credentials),
  register: (data) => api.post("/admin/register", data),
};

// Products API
export const productsAPI = {
  getAll: () => api.get("/products"),
  getFeatured: () => api.get("/products/featured"),
  create: (data) => api.post("/products", data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
};

// Subscribers API
export const subscribersAPI = {
  getAll: () => api.get("/subscribers"),
  subscribe: (email) => api.post("/subscribers", { email }),
};

// Pages API
export const pagesAPI = {
  getPage: (pageName) => api.get(`/pages/${pageName}`),
  updatePage: (data) => api.post("/pages", data),
};

export default api;
