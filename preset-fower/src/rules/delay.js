/**
 * delay
 * 
 * delay-{value} transition-delay: {value}ms;
 */

const getStyle = (k, config) => {
  const str = `delay-`
  if (k.startsWith(str)) {
    const num = Number.parseInt(k.replace(str, ''))
    if (!Number.isNaN(num)) {
      return {
        'transition-delay': `${num}ms`,
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