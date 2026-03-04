import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import process from 'eslint-plugin-vue/lib/configs/base.js'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/CV-Webapp/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})