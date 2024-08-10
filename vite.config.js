import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port for development server
    open: true,
  },
  preview: {
    port: 5000, // Port for preview server
  },
});
