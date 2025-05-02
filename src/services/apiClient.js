import axios from "axios";
import { useUserStore } from "../store/useUserStore";
import { toast } from "sonner";

const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";

const env = import.meta.env.VITE_ENV;
const url = import.meta.env.VITE_BACKEND_URL;

let BASE_URL = "";
if (env === "development") {
  BASE_URL = `/api`;
} else {
  BASE_URL = url || `https://tiberbu.onrender.com/api/v1.0/`;
}

const createApiClient = (baseURL, contentType = "application/json") => {
  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": contentType,
      // "Authorization": `Bearer ''`,
    },
    withCredentials: true,
  });

  client.interceptors.request.use(
    (config) => {
      const { access_token } = useUserStore.getState(); // Get accessToken here
      // console.log("accessToken in interceptor:", access_token); // Add this line!

      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}k`;
      }
      console.log(config,access_token)
      return config;
    },
    (error) => Promise.reject(error)
);


  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const { refresh_token } = useUserStore.getState(); // Get refreshToken and refreshAccessToken here

        if (refresh_token) {
          try {
            const refreshResponse = await axios.post(`${BASE_URL}/profile/auth/refresh`, {
              refresh: refresh_token,
            }, {
              withCredentials: true,
            });

            if (refreshResponse.status === 200) {
              // console.log(refreshResponse)
              const newAccessToken = refreshResponse.data.access;
              const newRefreshToken = refreshResponse.data.refresh;
              useUserStore.getState().setAccessToken(newAccessToken); // Update the store
              useUserStore.getState().setRefreshToken(newRefreshToken); // Update the store
              
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // Retry the original request
              return axios(originalRequest); // Execute the original request with the new access token
            }
          } catch (refreshError) {
            // Handle refresh token failure (e.g., redirect to login)
            // console.error("Failed to refresh token:", refreshError);
            toast.error(refreshError.response.data.detail||"Session expired. Please log in again.");
            useUserStore.getState().clearUser();
            window.location.href = '/login'; 
            return Promise.reject(refreshError);
          }
        } else {
          // No refresh token available, redirect to login
          useUserStore.getState().clearUser();
          window.location.href = '/login';
          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }
  );

  return client;
};

export const apiClient = createApiClient(BASE_URL);
export const apiClient2 = createApiClient(
  BASE_URL,
  "multipart/form-data"
);