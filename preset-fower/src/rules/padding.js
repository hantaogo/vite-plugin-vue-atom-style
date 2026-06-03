import { parseSize } from '../utils'

const padding = 'padding'
const Top = '-top'
const Left = '-left'
const Right = '-right'
const Bottom = '-bottom'

const data = {
  p: [padding],
  pl: [padding + Left],
  pt: [padding + Top],
  pr: [padding + Right],
  pb: [padding + Bottom],
  px: [padding + Left, padding + Right],
  py: [padding + Top, padding + Bottom],
}

const regex = /^(p[ltrbxy]?)(\-?)(.+)$/i

const getStyle = (k, config) => {
  const result = k.match(regex)
  // result形如：null 或 ['p10', 'p', '10', ...]
  if (!Array.isArray(result) || result.length < 4) {
    return
  }
  const [_, key, sep, value] = result
  const styleNames = data[key]
  if (!styleNames) {
    return
  }
  const size = parseSize(value, config.unit, sep ? 1 : config.unitSize)
  if (size) {
    return { styleNames, size }
  }
}

export default {
  name: 'padding',
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    const result = getStyle(k, config)
    if (result) {
      const { styleNames, size } = result
      const obj = {}
      for (const styleName of styleNames) {
        obj[styleName] = size
      }
      return obj
    }
  }
}