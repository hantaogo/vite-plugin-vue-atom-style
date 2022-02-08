export default {
  match: (k, config) => {
    const color = config.theme.colors[k]
    return !!color
  },
  translate: (k, config) => {
    const color = config.theme.colors[k]
    return {
      color,
    }
  }
}