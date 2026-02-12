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
            input: resolve(__dirname, "index.html"),
            output: {
              entryFileNames: "index.12345678.js",
              chunkFileNames: "chunks/[name].js",
              assetFileNames: (assetInfo) => {
                if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                  return "index.12345678.css";
                }
                return "assets/[name][extname]";
              }
            }
          }
        }
        : undefined
  };
});
