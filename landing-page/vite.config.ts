// @ts-expect-error: Node.js 'path' import is allowed in Vite config
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // @ts-expect-error: Node.js 'path' import is allowed in Vite config
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
