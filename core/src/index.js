import { mergeOptions } from './mergeOptions'
import { generate } from './generate'

export default (args = {}) => {
  const options = mergeOptions(args)
  const fileRegex = options.fileRegex || /\.(vue)$/
  return {
    name: 'vite-plugin-vue-atom-style',
    transform(code, filePath) {
      if (!fileRegex.test(filePath)) {
        return
      }
      // 忽略有标记的文件
      if (options.ignoreFlag && code.startsWith(options.ignoreFlag)) {
        return
      }
      // 只使用有标记的文件
      if (options.flag && !code.startsWith(options.flag)) {
        return
      }
      return transformSFC(code, options)
    },
    handleHotUpdate(ctx) {
      if (!fileRegex.test(ctx.file)) {
        return
      }
      const read = ctx.read
      ctx.read = async () => {
        const code = await read()
        // 忽略有标记的文件
        if (options.ignoreFlag && code.startsWith(options.ignoreFlag)) {
          return
        }
        // 只使用有标记的文件
        if (options.flag && !code.startsWith(options.flag)) {
          return
        }
        return transformSFC(code, options) || code
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