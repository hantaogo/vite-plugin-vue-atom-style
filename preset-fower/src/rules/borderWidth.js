const regex = /border(top|right|bottom|left)?(\-)?(\d+)/i

const getStyle = (k, config) => {
  const result = k.match(regex)
  if (Array.isArray(result) && result.length >= 4) {
    const [_, side, sep, value] = result
    let num = Number.parseInt(value)
    if (Number.isNaN(num)) {
      num = 1
    }
    const size = `${sep ? num : num * config.sizeUnit}${config.unit}`
    if (side) {
      return {
        [`border-${side}-width`]: size,
      }
    } else {
      return {
        'border-width': size,
      }
    }
  }
}

/**
 * 边框宽度
 * 
 * border-{value}	border-width: {value};
 * border{Top,Right,Bottom,Left}-{value}	border-{side}-width: {value};
 */
export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}