export default {
  match: (k, config) => {
    return k.startsWith('bg')
  },
  translate: (k, config) => {
    const colorName = k.replace('bg', '')
    const color = config.theme.colors[colorName]
    if (!color) {
      return
    }
    return {
      'background-color': color
    }
  }
}