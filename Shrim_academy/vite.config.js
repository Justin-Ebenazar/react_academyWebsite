import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],server: {
    port: 5173, 
    allowedHosts: [
      'localhost',
      '761f-2401-4900-6342-317f-15ed-ebd2-944d-c4ac.ngrok-free.app'
    ],
  },
});

