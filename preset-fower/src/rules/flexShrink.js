const key = 'flexshrink'

/**
 * flex 缩小
 * flexShrink-{value}
 */
export default {
  match: (k, config) => {
    if (k.startsWith(`${key}${config.vs}`)) {
      return true
    }
  },
  translate: (k, config, obj) => {
    const [_, value] = k.split(config.vs)
    return {
      display: 'flex',
      'flex-shrink': value
    }
  }
}