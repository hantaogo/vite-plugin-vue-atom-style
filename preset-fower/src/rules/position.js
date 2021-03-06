const styleName = 'position'

const data = {
  static: 'static',
  fixed: 'fixed',
  absolute: 'absolute',
  relative: 'relative',
  sticky: 'sticky',
}

const getStyle = (k, config) => {
  if (data[k]) {
    return {
      [styleName]: data[k],
    }
  } else if (k.startsWith(`position-`)) {
    const value = k.replace(`position-`, '')
    if (value) {
      return {
        [styleName]: value
      }
    }
  }
}

/**
 * position-{value} | static | fixed | absolute | relative | sticky
 */
export default {
  name: 'position',
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}