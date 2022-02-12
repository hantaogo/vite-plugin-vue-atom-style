const styleName = 'background-image'

const getColors = (k, config) => {
  const [_, ...colors] = k.split('-')
  if (Array.isArray(colors) && colors.length >= 2) {
    const hexs = colors.map(t => config.theme.colors[t]).filter(t => t)
    if (hexs.length >= 2) {
      return hexs
    }
  }
}

const getStyle = (k, config) => {
  if (k.startsWith(`bggradientx-`)) {
    const colors = getColors(k, config)
    if (colors) {
      return {
        [styleName]: `linear-gradient(to right, ${colors.join(', ')})`
      }
    }
  } else if (k.startsWith(`bggradienty-`)) {
    const colors = getColors(k, config)
    if (colors) {
      return {
        [styleName]: `linear-gradient(to bottom, ${colors.join(', ')})`
      }
    }
  }
}

/**
 * 渐变色
 * bgGradientX-red400-yellow400 | bgGradientY-purple500-pink500-red500
 */
export default {
  name: 'gradient',
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}