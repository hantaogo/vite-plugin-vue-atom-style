import { parseSize } from '../utils'

const data = {
  flexauto: {
    'flex': '1 1 auto',
  },
  flexinitial: {
    'flex': '0 1 auto',
  },
  flexnone: {
    'flex': 'none',
  },
}

/**
 * flex
 * flexAuto flex: 1 1 auto;
 * flexInitial flex: 0 1 auto;
 * flexNone flex: 'none';
 * flex-1-2-auto flex: 1-2-auto;
 */
export default {
  name: 'flex',
  match: (k, config) => {
    if (data[k]) {
      return true
    } else if (k.startsWith('flex-')) {
      return true
    }
    return false
  },
  translate: (k, config, obj) => {
    if (data[k]) {
      return {
        display: 'flex',
        ...data[k],
      }
    } else if (k.startsWith('flex-')) {
      // flex 为2个值时，不判断
      // flex 为3个值，且basis不为0时，替换basis单位: flex-grow | flex-shrink | flex-basis
      const str = k.replace('flex-', '')
      const values = str.split('-')
      if (values.length === 3 && values[2] !== '0') {
        values[2] = parseSize(values[2], config.unit)
      }
      const val = values.join(' ')
      return {
        display: 'flex',
        'flex': val
      }
    }
  }
}