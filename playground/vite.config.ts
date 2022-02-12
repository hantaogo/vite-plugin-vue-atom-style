import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ViteRestart from 'vite-plugin-restart'
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
      // debug: {
      //   className: 'inlineBlock'
      // },
    }),
    vue(),
    ViteRestart({
      restart: [
        '../core/src/**/*',
        '../preset-fower/src/**/*',
      ]
    }),
  ],
  resolve: { // @/ 替换为 src/
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
})
