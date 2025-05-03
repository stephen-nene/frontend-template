import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  
  console.log(env.VITE_BACKEND_URL);
  
  const backUrl = env.VITE_BACKEND_URL || "https://server-template-n0q8.onrender.com/";

  return {
    plugins: [react(),tailwindcss()],

    server: {
      host: "0.0.0.0",
      port: 5173,
      // strictPort: true,
      // allowedHosts: [".ngrok-free.app"],
      // cors: true,

      proxy: {
        "/api/": {
          target: backUrl,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          configure: (proxy) => {
            proxy.on("error", (err) => {
              console.log("Proxy Error:", err);
            });
            proxy.on("proxyReq", (proxyReq) => {
              console.log("Proxying:", proxyReq.path);
            });
          },
        },
        "/socket.io": {
          target: backUrl,
          ws: true,
          changeOrigin: true,
        },
      },

      watch: {
        ignored: ["**/src-tauri/**"],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~": path.resolve(__dirname, "./public"),
      },
    },
  };
});