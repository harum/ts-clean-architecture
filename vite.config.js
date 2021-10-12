import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src/apps/web-client',
  plugins: [vue(), react()],
});
