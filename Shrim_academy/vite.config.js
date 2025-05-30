import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],server: {
    port: 5173, 
    allowedHosts: [
      'localhost',
      'c737-2401-4900-6341-dfe0-c1f1-dafd-c955-93fe.ngrok-free.app'
    ],
  },
});

