import { mergeOptions } from './mergeOptions'
import { generate } from './generate'

export default (args = {}) => {
  const options = mergeOptions(args)
  const fileRegex = options.fileRegex || /\.(vue)$/
  const check = (filePath) => {
    if (!fileRegex.test(filePath)) {
      return false
    }
    // 忽略有标记的文件
    if (options.ignoreFlag && code.startsWith(options.ignoreFlag)) {
      return false
    }
    // 只使用有标记的文件
    if (options.flag && !code.startsWith(options.flag)) {
      return false
    }
    return true
  }
  return {
    name: 'vite-plugin-vue-atom-style',
    transform(code, filePath) {
      if (!check(filePath)) {
        return
      }
      return transformSFC(code, options)
    },
    handleHotUpdate(ctx) {
      const read = ctx.read
      if (check(ctx.file)) {
        ctx.read = async () => {
          const code = await read()
          return transformSFC(code, options) || code
        }
      }
    },
  }
}

const transformSFC = (code, options) => {
  const css = generate(code, options)
  if (!css) {
    return
  }
  return `${code}\n<style scoped>\n${css}</style>`
}