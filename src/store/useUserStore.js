import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { toast } from "sonner";
import { apiClient } from "@/services/apiClient";

export const useUserStore = create(
  persist(
    devtools((set, get) => ({
      user: null,
      token: null,
      refresh_token: null,
      access_token: null,
      loggedIn: false,
      darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
      loading: false,

      getUser: () => get().user,

      toggleDarkMode: (value) => {
        set((state) => {
          if (value !== undefined) {
            localStorage.setItem("darkMode", JSON.stringify(value));
            return { darkMode: value };
          }else{

            const newMode = !state.darkMode;
            localStorage.setItem("darkMode", JSON.stringify(newMode));
            return { darkMode: newMode };
          }
        });
      },

      setUser: (user, token) => set({ user, token, loggedIn: true }),

      clearUser: (no) => {
        set({ user: null, refresh_token: null, access_token: null, loggedIn: false });
        if (no) return;
        toast.success("👋 You have been logged out.");
      },

      setAccessToken: (access_token) => set({ access_token }),
      setRefreshToken: (refresh_token) => set({ refresh_token }),

      login: async (data, navigate, setError) => {
        set({ loading: true });
        setError(null);
        const toastId = toast.loading("Logging in...");
        const data2 = {
          ...data,
          identifier: data.email
        }

        try {
          const response = await apiClient.post("profile/auth/login", data2);
          console.log("Response:", response);
          if (response.status === 200) {
            set({
              user: response.data.user_info,
              refresh_token: response.data.refresh_token,
              access_token: response.data.access_token,
              loggedIn: true,
            });
            toast.success(response.data.message || "LoggedIn successful!");
            // setTimeout(() => {
            //   navigate("/");
            // }, 3000);
            return response;
          }
        } catch (error) {
          let errorMessage = "An error occurred. Please try again.";
          if (error.response && (error.response.data || error.response.data.error)) {
            errorMessage = error.response.data.error || error.response.data.detail || "An error occurred.";
            setError(errorMessage);
            toast.error(errorMessage);
          } else {
            toast.error("Login failed. Please check your credentials.");
          }
        } finally {
          toast.dismiss(toastId);
          set({ loading: false });
        }
      },

      fetchUser: async () => {
        try {
          const response = await apiClient.get("profile/auth/user");
          console.log("Response:", response);
          if (response.status === 200) {
            if (response.data?.ser_type !== "Bidder") {
              set({ user: null, token: null, loggedIn: false });
            } else {
              set({ user: response.data, loggedIn: true });
            }
          }
        } catch (error) {
          console.error("Error:", error?.response?.data);
        }
      },

      logOut: async () => {
        try {
          const response = await apiClient.post("profile/auth/logout/",{"refresh": get().refresh_token});
          if (response.status === 200) {
            console.log(response.data.message);
            get().clearUser();
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error(error.response?.data?.detail);
        }
      },
    })),
    {
      name: "userStore",
      partialize: (state) => ({
        user: state.user,
        access_token: state.access_token,
        refresh_token: state.refresh_token,
        loggedIn: state.loggedIn,
        darkMode: state.darkMode,
      }),
    }
  )
);