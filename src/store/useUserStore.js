import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { toast } from 'sonner';

export const useUserStore = create(
  devtools(
    // persist(
      (set, get) => ({
        // user: null,
        user: {
          id: 1,
          name: "Steve Nene",
          email: "steve@nene.com",
          role: "admin",
          status: "active",
        },
        token: null,
        // loggedIn: false,
        loggedIn: true,

        darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,

        // Get user info
        getUser: () => get().user,

        // Toggle Dark Mode
        toggleDarkMode: () => {
          toast.success("Dark mode toggled!", {
            duration: 500,
            position: "top-center",
          });
          set((state) => {
            const newMode = !state.darkMode;
            localStorage.setItem("darkMode", JSON.stringify(newMode));
            return { darkMode: newMode };
          });
        },

        // Set user after login/signup
        setUser: (user, token) => set({ user, token, loggedIn: true }),

        // Clear user on logout
        clearUser: () => set({ user: null, token: null, loggedIn: false }),
        logOut: () => set({ user: null, token: null, loggedIn: false }),
      }),
      { name: "user-storage" } 
       ,{
      // ...

    },
    )
  // )
);
