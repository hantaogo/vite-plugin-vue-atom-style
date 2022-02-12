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
      shortcuts: {
        'button': 'w-100 h-50 bgBlue300 white roundedSmall shadowLarge transitionCommon duration-150 scale-110--active toCenter',
      },
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
