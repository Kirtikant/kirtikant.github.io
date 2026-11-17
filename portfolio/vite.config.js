import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: base should be your repo name
export default defineConfig({
  plugins: [react()],
  base: '/'
})
