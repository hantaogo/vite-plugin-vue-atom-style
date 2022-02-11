const getFontSize = (k, config) => {
  // text-{value} font-size: {value};
  if (k.startsWith(`text-`)) {
    const [_, value] = k.split('-')
    const size = Number.parseInt(value)
    if (Number.isNaN(size)) {
      return
    }
    return size
  } else if (k.startsWith('text')) {
    // text2XL
    const size = k.replace('text', '')
    return config.theme.fontSizes[size]
  }
}

export default {
  match: (k, config) => {
    return !!getFontSize(k, config)
  },
  translate: (k, config) => {
    const fontSize = getFontSize(k, config)
    return {
      'font-size': `${fontSize}${config.unit}`
    }
  }
}