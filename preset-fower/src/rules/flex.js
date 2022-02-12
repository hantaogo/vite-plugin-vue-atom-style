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
      const val = k.replace('flex-', '').replace(/\-/g, ' ')
      return {
        display: 'flex',
        'flex': val
      }
    }
  }
}