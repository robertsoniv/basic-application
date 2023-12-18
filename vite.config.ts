import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_APP_CONFIG_BASE?.length > 1 ? `${process.env.VITE_APP_CONFIG_BASE}/` : undefined,
  plugins: [react()],
})
