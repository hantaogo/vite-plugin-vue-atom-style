const getColor = (k, config) => {
  if (k.startsWith('bordercolor-')) {
    const color = k.replace('bordercolor-', '')
    if (color) {
      return `#${color}`
    }
  } else {
    const colorName = k.replace('border', '')
    return config.theme.colors[colorName]
  }
}

export default {
  match: (k, config) => {
    return !!getColor(k, config)
  },
  translate: (k, config) => {
    const color = getColor(k, config)
    if (color) {
      return {
        'border-color': color
      }
    }
  }
}