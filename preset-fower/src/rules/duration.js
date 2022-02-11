/**
 * duration
 * 
 * duration-{value} transition-duration: {value}ms;
 */

const getStyle = (k, config) => {
  const str = `duration-`
  if (k.startsWith(str)) {
    const num = Number.parseInt(k.replace(str, ''))
    if (!Number.isNaN(num)) {
      return {
        'transition-duration': `${num}ms`,
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