/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.',  // Thư mục gốc của dự án
  base: './',  // Đường dẫn tương đối
  build: {
    outDir: 'dist',  // Đường dẫn tới thư mục build
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),  // File đầu vào là 'index.html' nằm ngoài thư mục 'src'
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
  },
});
