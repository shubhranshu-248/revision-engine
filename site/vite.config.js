import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages at https://<user>.github.io/revio/,
  // uncomment and set base to '/revio/'. For Vercel or a custom
  // root domain, leave base as '/'.
  base: '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
})
