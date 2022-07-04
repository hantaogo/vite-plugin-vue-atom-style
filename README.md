# vite-plugin-vue-atom-style
Vue3的原子类样式引擎，为了创造一个简单，兼容性强，且容易使用的原子类工具

## 特性：
- vite插件，编译时解析组件的class属性，生成原子类到```<style scoped>```
- 非常简单和容易理解，默认无规则，只提供功能
- class中可以使用表达式
- 支持热更新
- 可修改px为自定义单位，例如：rpx


## TODO
- √ 定义一个功能完整的预制规则集合，参考：https://fower.vercel.app/zh-cn/
- × 跟fower有些差别，待完善文档，具体区别目前可以到演示代码中查看
- × 支持可预测的样式，参考：https://fower.vercel.app/zh-cn/docs/predictable-style

## 开发环境
- Vue 3
- Vite

## 演示
在线演示：
http://atomstyle.japple.fun

本地运行：
```
步骤1：下载代码
步骤2：cd playground
步骤3：npm install
步骤4：npm run dev
步骤5：打开 http://localhost:3000/
```

## 快速开始

第一步. 安装开发依赖
```js
npm i -D @vite-plugin-vue-atom-style/core @vite-plugin-vue-atom-style/preset-fower
```

第二步. 配置 vite.config.js
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import atomStyle from '@vite-plugin-vue-atom-style/core'
import presetFower from '@vite-plugin-vue-atom-style/preset-fower'

export default defineConfig({
  plugins: [
    atomStyle({
      presets: [presetFower],
      // vue第一行为 <!-- atom-style --> 时，才使用这个插件
      // flag: '<!-- atom-style -->',
      // vue第一行为 <!-- atom-style-ignore --> 时，不使用这个插件
      // ignoreFlag: '<!-- atom-style-ignore -->',
    }),
    vue(),
  ],
})
```

## 示例
```html
// Base.vue
<script setup>
import { ref } from 'vue'
const green = ref(true)
</script>

<template>
  <div class="column-toCenter">
    <div class="title text4XL pink300 w400 h200 bgGreen400">标题</div>
    <div :class="['shadowLg', 'text3XL', green ? 'bgGray400' : 'bgRed500', 'square300', 'bgPink300--hover', 'p10']" @click="green = !green">Hello vue-atom-style.</div>
  </div>
</template>
```

## 自定义规则

示例：
```js
{
  config: { // 自定义配置
    markSeperator: '|', // 标记分隔符
    unit: 'rpx', // 尺寸单位
    unitSize: 8, // 某些无单位的数值使用的尺寸系数
    theme: { // 主题
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000',
      },
      fontSizes: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
      },
    },
  },
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
}
```

## preset-fower的配置
``` js
import { colors } from './colors'

export default {
  unit: 'px',
  markSeperator: '--',
  unitSize: 4,
  theme: {
    colors,
    modes: {
      dark: 'dark',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    spacings: {
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 28,
      8: 32,
      9: 36,
      10: 40,
      11: 44,
      12: 48,
      14: 56,
      16: 64,
      20: 80,
      24: 96,
      28: 112,
      32: 128,
      36: 144,
      40: 160,
      44: 176,
      48: 192,
      52: 208,
      56: 224,
      60: 240,
      64: 256,
      72: 288,
      80: 320,
      96: 384,
    },
    fontFamilies: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
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
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacings: {
      tighter: -0.9,
      tight: -0.45,
      normal: 0,
      wide: 0.45,
      wider: 0.9,
      widest: 1.8,
    },
    radii: {
      none: 0,
      tiny: 2,
      small: 4,
      medium: 6,
      large: 8,
      huge: 12,
      gigantic: 16,
      full: 9999,
    },
    shadows: {
      tiny: '0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01)',
      small: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      medium: '0 4px 8px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      large: '0 8px 16px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
      huge: '0 14px 24px rgba(0, 0, 0, 0.16), 0 0 2px rgba(0,0,0,0.02)',
      gigantic: '0 24px 48px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0,0,0,0.02)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
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
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    keyframes: {
      spin: {  
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
      ping: {
        '75%, 100%': { transform: 'scale(2)', opacity: 0 },
      },
      pulse: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: '0.5' },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
  },
}
```
