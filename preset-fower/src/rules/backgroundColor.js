const key1 = 'bgcolor'
const key2 = 'bg'
const styleName = 'background-color'

const getColor = (k, config) => {
  if (k.startsWith(key1)) {
    const color = k.replace(key1, '').replace('-', '')
    if (color) {
      return `#${color}`
    }
  } else {
    const colorName = k.replace(key2, '').replace('-', '')
    const color = config.theme.colors[colorName]
    if (color) {
      return color
    }
  }
}

export default {
  match: (k, config) => {
    return /^(bg|bgcolor).+$/i.test(k)
  },
  translate: (k, config) => {
    const color = getColor(k, config)
    return {
      [styleName]: color
    }
  }
}