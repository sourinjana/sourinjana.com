import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://sourinjana.github.io/sourinjana.com use base: '/sourinjana.com/'
// If deploying to a custom domain (sourinjana.com) at the root, use base: '/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
