import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@': '/src',
      '@common':'/src/common',
      '@pages':'/src/pages',
      '@assets':'/src/assets',
      "@components":'/src/components'
    }
  }
})
