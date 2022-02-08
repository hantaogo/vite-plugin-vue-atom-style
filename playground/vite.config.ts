import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import atomStyle from '../core/src'
import presetFower from '../preset-fower/src'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    atomStyle({
      presets: [presetFower],
    }),
    vue(),
  ],
  resolve: { // @/ 替换为 src/
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
})
