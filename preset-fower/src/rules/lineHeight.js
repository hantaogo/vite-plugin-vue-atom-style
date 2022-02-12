export default {
  match: (k, config) => {
    return /leading.+/.test(k)
  },
  translate: (k, config) => {
    const type = k.replace('leading', '')
    const p = config.theme.lineHeights[type]
    if (p) {
      return {
        'line-height': p
      }
    }
    return data[k]
  }
}