const key = 'flexwrap'

/**
 * flex 折叠
 * flexWrap-{value}
 */
export default {
  name: 'flexWrap',
  match: (k, config) => {
    if (k.startsWith(`${key}-`)) {
      return true
    }
  },
  translate: (k, config, obj) => {
    const [_, value] = k.split('-')
    return {
      display: 'flex',
      'flex-wrap': value
    }
  }
}