const regex = /^border(top|right|bottom|left)?(\-)?(\d+)$/i

const getStyle = (k, config) => {
  if (k === 'border') {
    return {
      'border-width': `1${config.unit}`,
    }
  } else if (k === 'borderTop') {
    return {
      'border-top-width': `1${config.unit}`,
    }
  } else if (k === 'borderRight') {
    return {
      'border-right-width': `1${config.unit}`,
    }
  } else if (k === 'borderBottom') {
    return {
      'border-bottom-width': `1${config.unit}`,
    }
  } else if (k === 'borderLeft') {
    return {
      'border-left-width': `1${config.unit}`,
    }
  }
  const result = k.match(regex)
  if (Array.isArray(result) && result.length >= 4) {
    const [_, side, sep, value] = result
    let num = Number.parseInt(value)
    if (!Number.isNaN(num)) {
      const size = `${sep ? num : num * config.sizeUnit}${config.unit}`
      if (side) {
        const obj = {
          'border-top-width': '0',
          'border-right-width': '0',
          'border-bottom-width': '0',
          'border-left-width': '0',
        }
        obj[`border-${side}-width`] = size
        return obj
      } else {
        return {
          'border-width': size,
        }
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