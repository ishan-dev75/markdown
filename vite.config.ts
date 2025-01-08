import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@service": path.resolve(__dirname, "src/service"),
    },
  },
});
