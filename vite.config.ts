import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/recourse/',
  resolve: {
    alias: {
      '@/app': resolve(__dirname, './src/app'),
      '@/assets': resolve(__dirname, './src/assets'),
      '@/shared': resolve(__dirname, './src/shared'),
      '@/': resolve(__dirname, './src')
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
