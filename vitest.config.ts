/** @type {import('vite').UserConfig} */
import react from "@vitejs/plugin-react";
import path from "path";
const config = {
  test: {
    globals: true,
    environment: "jsdom",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // …
    },
  },
};

export default config;
