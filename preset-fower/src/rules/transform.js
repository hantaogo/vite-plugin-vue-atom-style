import { parseSize } from '../utils'

const getStyle = (k, config) => {
  const regex = /^(scale[xy]?|rotate[xy]?|translate[xy]?|skew[xy]?|origin)-(.+)$/i
  const result = k.match(regex)
  if (Array.isArray(result) && result.length >= 3) {
    const [_, key, value] = result
    if (key === 'origin') {
      return {
        'transform-origin': value,
      }
    } else if (key.startsWith('scale')) {
      const num = Number.parseInt(value)
      if (!Number.isNaN(num)) {
        return {
          transform: `${key}(${num / 100})`
        }
      }
    } else if (key.startsWith('rotate')) {
      const val = parseSize(value, 'deg')
      if (val) {
        return {
          transform: `rotate(${val})`
        }
      }
    } else if (key === 'translate') {
      const [x, y] = value.split('-')
      if (x && y) {
        const sizeX = parseSize(x, config.unit)
        const sizeY = parseSize(y, config.unit)
        if (sizeX && sizeY) {
          return {
            transform: `translate(${sizeX}, ${sizeY})`,
          }
        }
      }
    } else if (key === 'translatex') {
      const size = parseSize(value, config.unit)
      if (size) {
        return {
          transform: `translateX(${size})`,
        }
      }
    } else if (key === 'translatey') {
      const size = parseSize(value, config.unit)
      if (size) {
        return {
          transform: `translateY(${size})`,
        }
      }
    } else if (key === 'skew') {
      const [x, y] = value.split('-')
      const sizeX = parseSize(x, 'deg')
      const sizeY = parseSize(y, 'deg')
      return {
        transform: `skew(${sizeX}, ${sizeY})`,
      }
    } else if (key === 'skewx' || key === 'skewy') {
      const size = parseSize(value, 'deg')
      if (size) {
        return {
          transform: `${key}(${size})`,
        }
      }
    }
  }
}

/**
 * transform
 */
export default {
  name: 'transform',
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}