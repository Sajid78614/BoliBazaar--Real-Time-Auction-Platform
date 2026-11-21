import axios from "axios";

const AUTH_TOKEN_KEY = "auth_token";

const getStorage = () => {
  if (typeof window === "undefined") return null;
  return window.localStorage;
};

export const getAuthToken = () => {
  const storage = getStorage();
  if (!storage) return null;
  return storage.getItem(AUTH_TOKEN_KEY);
};

export const setAuthToken = (token) => {
  const storage = getStorage();
  if (!storage || !token) return;
  storage.setItem(AUTH_TOKEN_KEY, token);
};

export const clearAuthToken = () => {
  const storage = getStorage();
  if (!storage) return;
  storage.removeItem(AUTH_TOKEN_KEY);
};

const configuredApiUrl = import.meta.env.VITE_API?.replace(/\/+$/, "");

if (import.meta.env.PROD && !configuredApiUrl) {
  throw new Error("VITE_API must be set to the deployed backend URL.");
}

export const API_BASE_URL = configuredApiUrl || "http://localhost:3000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAuthToken();

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
