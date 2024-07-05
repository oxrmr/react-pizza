import react from '@vitejs/plugin-react';
import { qrcode } from 'vite-plugin-qrcode';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), qrcode()],
  test: { globals: true, environment: 'jsdom', setupFiles: ['vitest.setup.ts'] },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/app/styles/globals";',
      },
    },
  },
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      widgets: '/src/widgets',
      features: '/src/features',
      entities: '/src/entities',
      shared: '/src/shared',
    },
  },
});
