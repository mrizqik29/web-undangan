import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Ganti 'web-undangan' dengan nama repo GitHub kamu
export default defineConfig({
  base: '/web-undangan/',
  plugins: [vue()],
})
