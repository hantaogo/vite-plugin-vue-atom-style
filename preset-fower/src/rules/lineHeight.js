import { parseSize } from '../utils'

export default {
  match: (k, config) => {
    return /line.+/.test(k)
  },
  translate: (k, config) => {
    const type = k.replace('line', '')
    const p = config.theme.lineHeights[type]
    if (p) {
      return {
        'line-height': p
      }
    } else {
      const str = type.replace('-', '')
      const size = parseSize(str, '')
      if (size) {
        return {
          'line-height': size
        }
      }
    }
  }
}