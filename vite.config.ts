import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: [`@import "./src/1.app/styles/globals";`],
      },
    },
  },
  resolve: {
    alias: {
      app: "/src/1.app",
      pages: "/src/2.pages",
      widgets: "/src/3.widgets",
      features: "/src/4.features",
      entities: "/src/5.entities",
      shared: "/src/6.shared",
    },
  },
});
