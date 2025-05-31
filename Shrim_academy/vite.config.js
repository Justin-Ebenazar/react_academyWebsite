import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],server: {
    port: 5173, 
    allowedHosts: [
      'localhost',
      'f15f-2401-4900-7b92-cec1-a5de-3bd8-e170-27a0.ngrok-free.app'
    ],
  },
});

