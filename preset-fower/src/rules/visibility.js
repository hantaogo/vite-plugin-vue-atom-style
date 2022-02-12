const styleName = 'visibility'

const data = {
  visible: {
    [styleName]: 'visible',
  },
  invisible: {
    [styleName]: 'hidden',
  },
}

/**
 * visible | invisible
 */
export default {
  name: 'visibility',
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return data[k]
  }
}