import axios from "axios";
import { useUserStore } from "../store/useUserStore";


const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";
// const API_URL = "http://127.0.0.1:8000/api/v1.0/"; http://127.0.0.1:8000/profile/auth/login


// console.log(API_URL)


// === Base URLs ===
const env = import.meta.env.VITE_ENV
const url = import.meta.env.VITE_BACKEND_URL;

let BASE_URL = "";
// if env === dev use ai else use ul
if (env === "development") { 
  BASE_URL = `/api`;
} else {
  BASE_URL = url || `https://tiberbu.onrender.com/api/v1.0/`;
}

// console.log(env)
const { accessToken, refreshToken } = useUserStore.getState();

// === Factory Function for Creating Axios Instances ===
const createApiClient = (baseURL, contentType = "application/json") => {
  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": contentType,
      "Authorization": `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  // === Request Interceptor ===
  client.interceptors.request.use(
    (config) => {
      

      // if (accessToken) {
      //   config.headers.Authorization = `Bearer ${accessToken}`;
      // }

      // Optionally include refresh token in a custom header
      // if (refreshToken) {
      //   config.headers["x-refresh-token"] = refreshToken;
      // }


      return config;
    },
    (error) => Promise.reject(error)
  );

  // === Response Interceptor ===
  client.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return client;
};

// === Axios Instances ===
export const apiClient = createApiClient(BASE_URL);
export const apiClient2 = createApiClient(
  BASE_URL,
  "multipart/form-data"
);

// === Usage Example ===
// apiClientV1.get('/user');
// apiClientV2.post('/login', { username, password });