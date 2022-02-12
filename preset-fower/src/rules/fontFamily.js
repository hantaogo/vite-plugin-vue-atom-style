export default {
  name: 'fontFamily',
  match: (k, config) => {
    return /font.+/i.test(k)
  },
  translate: (k, config) => {
    const type = k.replace('font', '').replace('-', '')
    const p = config.theme.fontFamilies[type]
    if (p) {
      return {
        'font-family': `${p}`
      }
    } else {
      return {
        'font-family': type.split('-').join(', ')
      }
    }
  }
}