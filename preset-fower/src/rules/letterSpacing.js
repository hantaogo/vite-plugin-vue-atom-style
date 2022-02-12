import { parseSize } from '../utils'

export default {
  name: 'letterSpacing',
  match: (k, config) => {
    return /letter.+/i.test(k)
  },
  translate: (k, config) => {
    const type = k.replace('letter', '').replace('-', '')
    const p = config.theme.letterSpacings[type]
    if (p) {
      return {
        'letter-spacing': `${p}${config.unit}`
      }
    } else {
      const size = parseSize(type, config.unit)
      if (size) {
        return {
          'letter-spacing': size
        }
      }
    }
  }
}