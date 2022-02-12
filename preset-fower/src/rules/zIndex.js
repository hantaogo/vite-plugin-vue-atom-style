const regex = /^zindex-?\d+$/

/**
 * zIndex
 * 
 * zIndex{value} | zIndex-{value} -> z-index: {value}
 */
export default {
  name: 'zIndex',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    const value = k.replace('zindex', '').replace('-', '')
    return {
      'z-index': value,
    }
  }
}