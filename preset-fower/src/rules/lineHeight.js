import { parseSize } from '../utils'

export default {
  name: 'lineHeight',
  match: (k, config) => {
    return /^lineheight.+$/i.test(k)
  },
  translate: (k, config) => {
    const type = k.replace('lineheight', '').replace('-', '')
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