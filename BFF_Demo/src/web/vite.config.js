import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, './'),
  plugins: [vue()],
  rollupOptions: {
    input: {
      index: path.resolve(__dirname, './index.html')
    },
    output: {
      dir: path.resolve(__dirname, '../server/assets')
    }
  }
})
