import { parseSize } from '../utils'

const selector = '>*:not(:last-child)'

const namesMap = {
  space: ['margin-right', 'margin-bottom'],
  spacex: ['margin-right'],
  spacey: ['margin-bottom'],
}

const regex = /^(space[xy])(\-?)(.+)$/i

const parse = (k, config) => {
  const result = k.match(regex)
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
      const style = {
        selector,
      }
      for (const name of names) {
        style[name] = size
      }
      return style
    }
  }
}
