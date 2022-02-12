const key = 'flexshrink'

/**
 * flex 缩小
 * flexShrink-{value}
 */
export default {
  name: 'flexShrink',
  match: (k, config) => {
    if (k.startsWith(`${key}-`)) {
      return true
    }
  },
  translate: (k, config, obj) => {
    const [_, value] = k.split('-')
    return {
      display: 'flex',
      'flex-shrink': value
    }
  }
}