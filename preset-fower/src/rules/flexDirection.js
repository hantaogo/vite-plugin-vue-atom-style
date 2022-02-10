const data = {
  row: {
    'flex-direction': 'row',
  },
  column: {
    'flex-direction': 'column',
  },
}

/**
 * flex 方向
 * row
 * column
 * flexDirection
 */
export default {
  match: (k, config) => {
    if (k.startsWith('flexdirection')) {
      const [_, value] = k.split(config.vs)
      return !!data[value]
    } else {
      return !!data[k]
    }
  },
  translate: (k, config, obj) => {
    if (k.startsWith('flexdirection')) {
      const [_, value] = k.split(config.vs)
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