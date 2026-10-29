// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Must match the repository name, since Pages serves the site under /slide-puzzle/
  base: '/slide-puzzle/',
  plugins: [react(), tailwindcss()],
})