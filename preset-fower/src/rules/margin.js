const margin = 'margin'
const Top = '-top'
const Left = '-left'
const Right = '-right'
const Bottom = '-bottom'

const marginMaps = {
  m: [margin],
  ml: [margin + Left],
  mt: [margin + Top],
  mr: [margin + Right],
  mb: [margin + Bottom],
  mx: [margin + Left, margin + Right],
  my: [margin + Top, margin + Bottom],
}

const exp = `^(m[ltrbxy]?)(\-?)(\\d+)$`;

const getMargin = (k, config) => {
  const regex = new RegExp(exp, 'i')
  const result = k.match(regex)
  // result形如：null 或 ['m10', 'm', '10', ...]
  if (!Array.isArray(result) || result.length < 4) {
    return
  }
  const key = result[1]
  const sep = result[2]
  const value = Number.parseInt(result[3])
  if (Number.isNaN(value)) {
    return
  }
  const styleNames = marginMaps[key]
  if (!styleNames) {
    return
  }
  return { styleNames, value : sep ? value : value * config.sizeUnit }
}

export default {
  match: (k, config) => {
    return !!getMargin(k, config)
  },
  translate: (k, config) => {
    const { styleNames, value } = getMargin(k, config)
    const obj = {}
    for (const styleName of styleNames) {
      obj[styleName] = `${value}${config.unit}`
    }
    return obj
  }
}