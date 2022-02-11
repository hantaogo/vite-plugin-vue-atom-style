const key1 = 'bgcolor'
const key2 = 'bg'
const styleName = 'background-color'

const getColor = (k, config) => {
  if (k.startsWith(`${key1}-`)) {
    const [_, color] = k.split('-')
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
      [styleName]: color
    }
  }
}