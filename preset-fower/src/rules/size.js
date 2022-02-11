import { parseSize } from '../utils'

const namesMap = {
  w: ['width'],
  h: ['height'],
  square: ['width', 'height'],
  circle: ['width', 'height', 'border-radius'],
  minw: ['min-width'],
  maxw: ['max-width'],
  minh: ['min-height'],
  maxh: ['max-height'],
}

const regex = /^([wh]|square|circle|min[hw]|max[hw])(\-?)(.+)$/i

const parse = (k, config) => {
  const result = k.match(regex)
  // result形如：null 或 ['square100', 'square', '100', ...]
  if (Array.isArray(result) && result.length >= 4) {
    const [_, key, sep, value] = result
    if (namesMap[key]) {
      const size = parseSize(value, config.unit, sep ? 1 : config.unitSize)
      if (size) {
        return { names: namesMap[key], size }
      }
    }
  }
}

export default {
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    const result = parse(k, config)
    if (result) {
      const { names, size } = result
      const style = {}
      for (const name of names) {
        style[name] = size
      }
      return style
    }
  }
}