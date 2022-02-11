const padding = 'padding'
const Top = '-top'
const Left = '-left'
const Right = '-right'
const Bottom = '-bottom'

const paddingMaps = {
  p: [padding],
  pl: [padding + Left],
  pt: [padding + Top],
  pr: [padding + Right],
  pb: [padding + Bottom],
  px: [padding + Left, padding + Right],
  py: [padding + Top, padding + Bottom],
}

const getPadding = (k, config) => {
  const regex = /^(p[ltrbxy]?)(\-?)(\d+)$/i
  const result = k.match(regex)
  // result形如：null 或 ['p10', 'p', '10', ...]
  if (!Array.isArray(result) || result.length < 4) {
    return
  }
  const key = result[1]
  const sep = result[2]
  const value = Number.parseInt(result[3])
  if (Number.isNaN(value)) {
    return
  }
  const styleNames = paddingMaps[key]
  if (!styleNames) {
    return
  }
  return { styleNames, value : sep ? value : value * config.sizeUnit }
}

export default {
  match: (k, config) => {
    return !!getPadding(k, config)
  },
  translate: (k, config) => {
    const { styleNames, value } = getPadding(k, config)
    const obj = {}
    for (const styleName of styleNames) {
      obj[styleName] = `${value}${config.unit}`
    }
    return obj
  }
}