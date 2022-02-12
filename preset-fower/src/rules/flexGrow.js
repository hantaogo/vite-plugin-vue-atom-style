const regex = /^flexgrow-?.+$/i

/**
 * flexGrow
 * flexGrow-{value}
 */
export default {
  name: 'flexGrow',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config, obj) => {
    const value = k.replace(`flexgrow`, '').replace('-', '')
    return {
      display: 'flex',
      'flex-grow': value
    }
  }
}