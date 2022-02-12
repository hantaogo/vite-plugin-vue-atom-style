const regex = /^bg-?(.+)$/i

/**
 * Background Color
 * 
 * bgRed500 | bgff0000 | bg-red500 | bg-ff0000
 */
export default {
  name: 'backgroundColor',
  match: (k, config) => {
    // 排除渐变色的
    if (k.startsWith('bggradient')) {
      return false
    }
    return regex.test(k)
  },
  translate: (k, config) => {
    const result = k.match(regex)
    if (Array.isArray(result) && result.length >= 2) {
      const key = result[1]
      const color = config.theme.colors[key] || `#${key}`
      return {
        'background-color': color
      }
    }
  }
}