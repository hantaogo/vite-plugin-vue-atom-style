import { parseSize } from '../utils'

export default {
  match: (k, config) => {
    return /letter.+/.test(k)
  },
  translate: (k, config) => {
    const type = k.replace('letter', '')
    const p = config.theme.letterSpacings[type]
    if (p) {
      return {
        'letter-spacing': `${p}${config.unit}`
      }
    } else {
      const str = type.replace('-', '')
      const size = parseSize(str, config.unit)
      if (size) {
        return {
          'letter-spacing': size
        }
      }
    }
  }
}