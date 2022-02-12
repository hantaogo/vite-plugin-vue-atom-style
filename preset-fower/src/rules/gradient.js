const styleName = 'background-image'

const regex = /^bggradient[xy](.+)$/i

const getStyle = (k, config) => {
  const result = k.match(regex)
  if (Array.isArray(result) && result.length === 2) {
    const colors = getColors(result[1], config)
    if (Array.isArray(colors) && colors.length >= 2) {
      const value = colors.join(', ')
      return {
        [styleName]: `linear-gradient(to right, ${value})`
      }
    }
  }
}

const getColors = (colorsStr, config) => {
  const [_, ...colors] = colorsStr.split('-')
  if (Array.isArray(colors) && colors.length >= 2) {
    const hexs = colors.map(t => config.theme.colors[t]).filter(t => t)
    if (hexs.length >= 2) {
      return hexs
    }
  }
}

/**
 * 渐变色
 * 颜色只支持config中的颜色，不支持 ff00ff，rgba等
 * bgGradientX-red400-yellow400 | bgGradientY-purple500-pink500-red500
 */
export default {
  name: 'gradient',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}