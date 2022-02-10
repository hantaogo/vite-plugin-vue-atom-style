const styleName = 'text-decoration'

const data = {
  underline: {
    [styleName]: 'underline',
  },
  linethrough: {
    [styleName]: 'line-through',
  },
  nounderline: {
    [styleName]: 'none',
  },
}

/**
 * underline | lineThrough | noUnderline
 */
export default {
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return data[k]
  }
}