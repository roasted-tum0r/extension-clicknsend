import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  const isWebBuild = process.env.VITE_BUILD_TARGET === "web";

  return {
    base: "./",
    plugins: [react()],
    server: {
      port: 3000,
      strictPort: true,
      host: "127.0.0.1",
    },
    build:
      command === "build"
        ? {
          outDir: isWebBuild ? "dist" : "../dist/popup",
          emptyOutDir: true,
          rollupOptions: {
            input: resolve(__dirname, "index.html"),
            output: isWebBuild
              ? {
                // Standard web build with hashing
                entryFileNames: "assets/[name].[hash].js",
                chunkFileNames: "assets/[name].[hash].js",
                assetFileNames: "assets/[name].[hash].[ext]"
              }
              : {
                // Extension build with fixed filenames for static referencing
                entryFileNames: "index.12345678.js",
                chunkFileNames: "chunks/[name].js",
                assetFileNames: (assetInfo) => {
                  if (assetInfo.name && assetInfo.name.includes(".css")) {
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
