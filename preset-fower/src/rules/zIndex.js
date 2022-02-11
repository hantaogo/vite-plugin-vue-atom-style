/**
 * zIndex
 * 
 * zIndex-{value} z-index: {value}
 */

const getStyle = (k, config) => {
  const str = `zindex-`
  if (k.startsWith(str)) {
    const z = Number.parseInt(k.replace(str, ''))
    if (!Number.isNaN(z)) {
      return {
        'z-index': z,
      }
    }
  }
}

export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}