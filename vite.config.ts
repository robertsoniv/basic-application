import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),
      splitVendorChunkPlugin(),
      nodePolyfills({
        include: ["util", "querystring", "http", "https"],
      }),
    ],
  };
});
