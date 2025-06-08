import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],server: {
    port: 5173, 
    allowedHosts: [
      'localhost',
      'c486-2401-4900-633a-5c7b-a14b-1b7-ac24-9a05.ngrok-free.app'
    ],
  },
});

