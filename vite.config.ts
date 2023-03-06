import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPurge from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [
    react(),
    // @ts-ignore
    htmlPurge(),
  ]
})
