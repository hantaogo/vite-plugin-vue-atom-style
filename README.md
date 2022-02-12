# vite-plugin-vue-atom-style
Vue3的原子类样式引擎，为了方便创造自己的原子类库

## 特性：
- vite插件，编译时解析组件的class属性，生成原子类到```<style scoped>```
- 非常简单和容易理解，默认无规则，只提供功能
- class中可以使用表达式
- 支持热更新
- 可修改px为自定义单位，例如：rpx

## TODO
- √ 定义一个功能完整的预制规则集合，参考：https://fower.vercel.app/zh-cn/
- × 支持可预测的样式，参考：https://fower.vercel.app/zh-cn/docs/predictable-style

## 开发环境
- Vue 3
- Vite

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
    atomStyle({ presets: [presetFower] }),
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
  <div class="column toCenter">
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