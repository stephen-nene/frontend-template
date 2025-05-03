import axios from "axios";
import { useUserStore } from "../store/useUserStore";
import { toast } from "sonner";

// Environment variables
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/";
const env = import.meta.env.VITE_ENV;
const url = import.meta.env.VITE_BACKEND_URL;

console.log("here",env)

// Determine the base URL based on the environment
const BASE_URL = env === "development" ? `/api` : url || `https://server-template-n0q8.onrender.com/`;

// Function to create an Axios client
const createApiClient = (baseURL, contentType = "application/json") => {
  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": contentType,
    },
    withCredentials: true,
  });

  // Request interceptor
  client.interceptors.request.use(
    (config) => {
      const { access_token } = useUserStore.getState();

      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // Handle token expiration and refresh logic
      if (
        error.response?.status === 401 &&
        error.response?.data?.code === "token_not_valid" &&
        error.response?.data?.messages?.some(
          (msg) => msg.token_class === "AccessToken" && msg.token_type === "access"
        ) &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        const { refresh_token } = useUserStore.getState();

        if (refresh_token) {
          try {
            const refreshResponse = await axios.post(
              `${BASE_URL}/profile/auth/refresh`,
              { refresh: refresh_token },
              { withCredentials: true }
            );

            if (refreshResponse.status === 200) {
              const { access: newAccessToken, refresh: newRefreshToken } = refreshResponse.data;

              // Update tokens in the store
              useUserStore.getState().setAccessToken(newAccessToken);
              useUserStore.getState().setRefreshToken(newRefreshToken);

              // Retry the original request with the new access token
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              return axios(originalRequest);
            }
          } catch (refreshError) {
            // Handle refresh token failure
            toast.error(refreshError.response?.data?.detail || "Session expired. Please log in again.");
            useUserStore.getState().clearUser();
            window.location.href = "/login";
            return Promise.reject(refreshError);
          }
        } else {
          // No refresh token available, clear user and redirect to login
          useUserStore.getState().clearUser();
          window.location.href = "/login";
          return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }
  );

  return client;
};

// Export API clients
export const apiClient = createApiClient(BASE_URL);
export const apiClient2 = createApiClient(BASE_URL, "multipart/form-data");