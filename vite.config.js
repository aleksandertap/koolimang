import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    react(),
  ],
});