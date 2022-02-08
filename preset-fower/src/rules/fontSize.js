const getFontSize = (k, config) => {
  if (!k.startsWith('text')) {
    return
  }
  const size = k.replace('text', '')
  return config.theme.fontSizes[size]
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