import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Local development port
    open: true,
    // Ensure the server listens on all network interfaces
    host: true,
  },
  build: {
    outDir: 'dist',
  },
});
