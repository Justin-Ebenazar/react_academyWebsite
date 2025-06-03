import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],server: {
    port: 5173, 
    allowedHosts: [
      'localhost',
      '8074-2401-4900-93fe-e369-8579-cc22-16e-3b5d.ngrok-free.app'
    ],
  },
});

