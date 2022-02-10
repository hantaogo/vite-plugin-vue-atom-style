const data = {
  row: {
    'flex-direction': 'row',
  },
  column: {
    'flex-direction': 'column',
  },
}

/**
 * flex支持
 * row
 * column
 * flexDirection
 */
export default {
  match: (k, config) => {
    if (k.startsWith('flexdirection')) {
      return true
    } else {
      return !!data[k]
    }
  },
  translate: (k, config, obj) => {
    if (k.startsWith('flexdirection')) {
      const [_, value] = k.split(config.valueSeperator)
      return {
        display: 'flex',
        'flex-direction': value
      }
    } else {
      return {
        display: 'flex',
        ...data[k],
      }
    }
  }
}