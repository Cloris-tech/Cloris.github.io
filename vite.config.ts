import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages (organization project site): https://cloris-tech.github.io/Cloris.github.io/
const GH_PAGES_BASE = '/Cloris.github.io/'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Dev keeps "/" so http://localhost:5173/ works; production uses repo subpath
  base: mode === 'production' ? GH_PAGES_BASE : '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
