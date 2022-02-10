const getColor = (k, config) => {
  const color = config.theme.colors[k]
  if (color) {
    return color
  } else if (k.startsWith(`color${config.vs}`)) {
    const [_, hex] = k.split(config.vs)
    if (hex) {
      return `#${hex}`
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