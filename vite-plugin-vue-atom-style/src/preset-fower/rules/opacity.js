export default {
  match: (k, config) => {
    return /^opacity\d+$/.test(k)
  },
  translate: (k, config) => {
    const size = Number.parseInt(k.replace('opacity', ''))
    return {
      opacity: size / 100,
    }
  }
}