import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    rewrites: [
      { source: "/(.*)", destination: "/" },
      {source: "/medicines", destination: "/medicines"},
      {source: "/register-medicine", destination: "/register-medicine"},
      {source: "/map-pharms", destination: "/map-pharms"},
      {source: "/new-pharmacy", destination: "/new-pharmacy"},
    ]
  },
})
