import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '~', replacement: '/src' }]
  },
  server: {
    port: 3000
  },
  plugins: [react(), svgr()]
})
