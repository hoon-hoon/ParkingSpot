import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 절대 경로 설정
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://openapi.seoul.go.kr:8088", // HTTP로 제공되는 공공 API 주소
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
