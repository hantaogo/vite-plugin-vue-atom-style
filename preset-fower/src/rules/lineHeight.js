import { parseSize } from '../utils'

export default {
  match: (k, config) => {
    return /line.+/i.test(k)
  },
  translate: (k, config) => {
    const type = k.replace('line', '').replace('-', '')
    const p = config.theme.lineHeights[type]
    if (p) {
      return {
        'line-height': p
      }
    } else {
      const size = parseSize(type, '')
      if (size) {
        return {
          'line-height': size
        }
      }
    }
  }
}