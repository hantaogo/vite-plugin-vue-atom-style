import { parseSize } from '../utils'

const margin = 'margin'
const Top = '-top'
const Left = '-left'
const Right = '-right'
const Bottom = '-bottom'

const data = {
  m: [margin],
  ml: [margin + Left],
  mt: [margin + Top],
  mr: [margin + Right],
  mb: [margin + Bottom],
  mx: [margin + Left, margin + Right],
  my: [margin + Top, margin + Bottom],
}

const regex = /^(m[ltrbxy]?)(\-?)(.+)$/i

const getStyle = (k, config) => {
  const result = k.match(regex)
  // result形如：null 或 ['m10', 'm', '10', ...]
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
  match: (k, config) => {
    return regex.test(k)
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