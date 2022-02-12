const regex = /^flexshrink-?.+$/i

/**
 * flexShrink
 * flexShrink-{value}
 */
export default {
  name: 'flexShrink',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config, obj) => {
    const value = k.replace(`flexshrink`, '').replace('-', '')
    return {
      display: 'flex',
      'flex-shrink': value
    }
  }
}