export default {
  match: (k, config) => {
    return config.theme.breakpoints[k]
  },
  translate: (k, config) => {
    const value = config.theme.breakpoints[k]
    if (value) {
      return {
        breakpoints: value,
      }
    }
  }
}