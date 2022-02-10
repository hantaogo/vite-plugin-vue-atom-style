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

const regex = `^(p[ltrbxy]?)(\-?)(\\d+)$`;

const getPadding = (k, config) => {
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
  const styleName = paddingMaps[key]
  if (!styleName) {
    return
  }
  return { styleName, value : sep ? value : value * config.sizeUnit }
}

export default {
  match: (k, config) => {
    return !!getPadding(k, config)
  },
  translate: (k, config) => {
    const { styleName, value } = getPadding(k, config)   
    return {
      [styleName]: `${value}${config.unit}`
    }
  }
}