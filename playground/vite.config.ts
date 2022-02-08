import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import atomStyle from './vite-plugin-vue-atom-style'
import presetFower from './vite-plugin-vue-atom-style/preset-fower'

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
  build: {
    lib: {
      name: 'vite-plugin-vue-atom-style',
      entry: path.resolve(__dirname, 'vite-plugin-vue-atom-style/index.js'),
      formats: ['es'],
      fileName: () => `index.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', '@vue/compiler-dom', '@vue/compiler-sfc', '@types/node', '@vitejs/plugin-vue', 'typescript', 'vite', 'vue-tsc'],
    },
  }
})
