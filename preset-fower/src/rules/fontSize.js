import { parseSize } from '../utils'

export default {
  name: 'fontSize',
  match: (k, config) => {
    return /text.+/i.test(k)
  },
  translate: (k, config) => {
    const type = k.replace('text', '').replace('-', '')
    const p = config.theme.fontSizes[type]
    if (p) {
      return {
        'font-size': `${p}${config.unit}`
      }
    } else {
      const size = parseSize(type, config.unit)
      if (size) {
        return {
          'font-size': size
        }
      }
    }
  }
}