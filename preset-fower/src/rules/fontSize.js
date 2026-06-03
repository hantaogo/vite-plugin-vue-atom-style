const getStyle = (k, config) => {
  if (k.startsWith('text')) {
    const key = k.replace('text', '')
    const num = config.theme.fontSizes[key]
    if (num) {
      return {
        'font-size': `${num}${config.unit}`
      }
    }
  }
}

/**
 * Font Size
 * 
 * textBase | textLarge ...
 */
export default {
  name: 'fontSize',
  match: (k, config) => {   
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}