import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  return {
    base: "./",
    plugins: [react()],

    build:
      command === "build"
        ? {
          outDir: "../dist/popup",
          emptyOutDir: true,
          rollupOptions: {
            input: resolve(__dirname, "index.html")
          }
        }
        : undefined
  };
});
