# vite-plugin-vue-atom-style
Vue3的原子类样式引擎，为了方便创造自己的原子类库

## 特性：
- vite插件，编译时解析组件的class属性，生成原子类到```<style scoped>```
- 非常简单和容易理解，默认无规则，只提供功能
- class中可以使用表达式
- 支持热更新
- 可修改px为自定义单位，例如：rpx
- 可修改标记的分隔符，例如：text2XL:hover:dark 修改为 text2XL--hover--dark

## TODO
- 定义一个功能完整的预制规则集合，参考：[fower](https://fower.vercel.app/zh-cn/)

## 开发环境
- Vue 3
- Vite

## 快速开始
- 安装 `npm i @vite-plugin-vue-atom-style/core @vite-plugin-vue-atom-style/preset-fower`

## 示例
```html
// Base.vue
<script setup>
import { ref } from 'vue'
const green = ref(true)
</script>

<template>
  <div class="column toCenter">
    <div class="title text4XL pink300 w400 h200 bgGreen400">标题</div>
    <div :class="['shadowLg', 'text3XL', green ? 'bgGray400' : 'bgRed500', 'square300', 'bgPink300--hover', 'p10']" @click="green = !green">Hello vue-atom-style.</div>
  </div>
</template>
```

## Vite配置

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import atomStyle from '@vite-plugin-vue-atom-style/core'
import presetFower from '@vite-plugin-vue-atom-style/preset-fower'

export default defineConfig({
  plugins: [
    atomStyle({
      // 预制规则和标记
      presets: [presetFower],
      // 自定义规则
      rules: [
        // box-sizing
        {
          match: (k, config) => {
            let v = ''
            if (k === 'boxBorder') v = 'border-box'
            if (k === 'boxContent') v = 'content-box'
            return !!v
          },
          translate: (k, config) => {
            let v = ''
            if (k === 'boxBorder') v = 'border-box'
            if (k === 'boxContent') v = 'content-box'
            return {
              'box-sizing': v
            }
          },
        }
      ],
      // 自定义标记
      marks: [
        {
          match: (k, config) => {
            return k === 'hover'
          },
          translate: (k, config) => {
            return {
              pseudo: ':hover',
            }
          }
        }
      ],
      // 组合的原子类（快捷方式）
      shortcuts: {
        'button': 'text2XL w200 h100 bgBlue300 shadowLg--hover',
      },
    }),
    vue(),
  ],
})
```

## 配置文件

```js
import { colors } from './colors'

export default {
  unit: 'px',
  markSeperator: '--',
  sizeUnit: 4,
  theme: {
    colors,
    fontSizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    // px将会被替换为unit
    shadows: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01)',
      base: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      md: '0 4px 8px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      lg: '0 8px 16px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      xl: '0 14px 24px rgba(0, 0, 0, 0.16), 0 0 2px rgba(0,0,0,0.02)',
      '2xl': '0 24px 48px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0,0,0,0.02)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
  },
}
```