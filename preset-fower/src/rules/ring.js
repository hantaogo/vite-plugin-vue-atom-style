const regex = /ring(.+)\-(\d+)/i

const getStyle = (k, config) => {
  const result = k.match(regex)
  if (Array.isArray(result) && result.length >= 3) {
    const [_, colorKey, value] = result
    let num = Number.parseInt(value)
    if (!Number.isNaN(num)) {
      const color = config.theme.colors[colorKey]
      if (color) {
        const width = `${num}${config.unit}`
        return {
          'box-shadow': `0 0 0 ${width} ${color}`
        }
      }
    }
  }
}

/**
 * 轮廓
 * 
 * ring{Color}-{width}	box-shadow: 0 0 0 ${width}px ${Color}
 */
export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}