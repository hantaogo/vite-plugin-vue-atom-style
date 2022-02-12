export default {
  name: 'fontFamily',
  match: (k, config) => {
    return /^fontfamily.+$/i.test(k)
  },
  translate: (k, config) => {
    const type = k.replace('fontfamily', '').replace('-', '')
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