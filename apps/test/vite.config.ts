import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import jsx from '@vitejs/plugin-vue-jsx'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions(), jsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})