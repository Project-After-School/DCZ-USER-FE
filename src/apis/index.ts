import axios, { AxiosError } from "axios";
import { cookie } from "@/utils/auth";

const BASEURL = import.meta.env.VITE_SERVER_BASE_URL;

export const instance = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
});

export const loginInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const accessToken = cookie.get("access_token");
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);
