const getFontWeight = (k, config) => {
  if (!k.startsWith('font')) {
    return
  }
  const weight = k.replace('font', '')
  return config.theme.fontWeights[weight]
}

export default {
  name: 'fontWeight',
  match: (k, config) => {
    return !!getFontWeight(k, config)
  },
  translate: (k, config) => {
    const fontWeight = getFontWeight(k, config)
    return {
      'font-weight': fontWeight,
    }
  }
}