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
        config.headers.Authorization = `Bearer ${access_token}r`;
      }
      // console.log(config,access_token)
      return config;
    },
    (error) => Promise.reject(error)
);


client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

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
          const refreshResponse = await axios.post(`${BASE_URL}/profile/auth/refresh`, {
            refresh: refresh_token,
          }, {
            withCredentials: true,
          });

          if (refreshResponse.status === 200) {
            const newAccessToken = refreshResponse.data.access;
            const newRefreshToken = refreshResponse.data.refresh;

            useUserStore.getState().setAccessToken(newAccessToken);
            useUserStore.getState().setRefreshToken(newRefreshToken);

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
          }
        } catch (refreshError) {
          toast.error(refreshError.response?.data?.detail || "Session expired. Please log in again.");
          useUserStore.getState().clearUser();
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      } else {
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