import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function isProd() {
  return process.env.NODE_ENV === 'production'
}

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, './'),
  plugins: [vue()],
  build: {
    outDir: isProd() ? path.resolve(__dirname, '../../dist/assets') : path.resolve(__dirname, '../server/assets'),
  }
})
