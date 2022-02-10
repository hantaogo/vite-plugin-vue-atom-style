const key1 = 'placeholdercolor'
const key2 = 'placeholder'
const styleName = 'color'

const getColor = (k, config) => {
  if (k.startsWith(`${key1}${config.vs}`)) {
    const [_, color] = k.split(config.vs)
    if (color) {
      return `#${color}`
    }
  } else {
    const colorName = k.replace(key2, '')
    const color = config.theme.colors[colorName]
    if (color) {
      return color
    }
  }
}

export default {
  match: (k, config) => {
    return getColor(k, config)
  },
  translate: (k, config) => {
    const color = getColor(k, config)
    return {
      prefix: 'input',
      pseudo: '::placeholder',
      [styleName]: color
    }
  }
}