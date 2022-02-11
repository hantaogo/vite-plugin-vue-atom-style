const getColor = (k, config) => {
  const color = config.theme.colors[k]
  if (color) {
    return color
  } else if (k.startsWith(`color-`)) {
    const c = k.replace('color-', '')
    if (c) {
      return `#${c}`
    }
  }
}

/**
 * color-ff0000 color: #ff0000
 * blue500 color: #339af0
 */
export default {
  match: (k, config) => {
    return getColor(k, config)
  },
  translate: (k, config) => {
    const color = getColor(k, config)
    return {
      color,
    }
  }
}