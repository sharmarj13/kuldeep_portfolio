import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit so no warning is emitted for 500 kB bundle
    chunkSizeWarningLimit: 1000,
  },
})
