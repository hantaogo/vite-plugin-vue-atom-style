import { mergeOptions } from './core/mergeOptions'
import { generate } from './core/generate'

export default (args = {}) => {
  const options = mergeOptions(args)
  const fileRegex = options.fileRegex || /\.(vue)$/

  return {
    name: 'vite-plugin-vue-atom-style',
    transform(code, id) {
      if (!fileRegex.test(id)) {
        return
      }
      return transformSFC(code, options)
    },
    handleHotUpdate(ctx) {
      const read = ctx.read
      if (fileRegex.test(ctx.file)) {
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