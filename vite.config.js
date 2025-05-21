import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Update this to the subdirectory path if deploying to one, e.g., '/my-app/'
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://example.com', // Replace with the actual API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
