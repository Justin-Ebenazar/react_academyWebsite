import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],server: {
    port: 5173, 
    allowedHosts: [
      'localhost',
      '58d8-2401-4900-67b2-2651-747d-2d32-741b-f0b3.ngrok-free.app'
    ],
  },
});

