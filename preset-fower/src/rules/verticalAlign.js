const regex = /^verticalalign-?.+$/i

/**
 * verticalAlign-{value}
 */
export default {
  name: 'verticalAlign',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    const value = k.replace('verticalalign', '').replace('-', '')
    return {
      'vertical-align': value
    }
  }
}