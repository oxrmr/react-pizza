import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: [`@import "./src/app/styles/globals";`],
      },
    },
  },
  resolve: {
    alias: {
      app: '/src/app',
      assets: '/src/assets',
      entities: '/src/entities',
      shared: '/src/shared',
      widgets: '/src/widgets',
      pages: '/src/pages',
      features: '/src/features',
    },
  },
});
