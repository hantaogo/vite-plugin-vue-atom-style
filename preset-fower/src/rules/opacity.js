/**
 * opacity
 * 
 * opacity-{value} opacity: {value}
 */

 const getStyle = (k, config) => {
  const str = `opacity${config.vs}`
  if (k.startsWith(str)) {
    const z = Number.parseInt(k.replace(str, ''))
    if (!Number.isNaN(z)) {
      return {
        'opacity': z / 100,
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