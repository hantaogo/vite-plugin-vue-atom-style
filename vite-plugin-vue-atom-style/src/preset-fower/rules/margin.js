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

const regex = /^(m[ltrbxy]?)(\d+)$/i;

const getMargin = (k, config) => {
  const result = k.match(regex)
  // result形如：null 或 ['m10', 'm', '10', ...]
  if (!Array.isArray(result) || result.length < 3) {
    return
  }
  const key = result[1]
  const value = Number.parseInt(result[2])
  if (Number.isNaN(value)) {
    return
  }
  const styleName = marginMaps[key]
  if (!styleName) {
    return
  }
  return { styleName, value }
}

export default {
  match: (k, config) => {
    return !!getMargin(k, config)
  },
  translate: (k, config) => {
    const { styleName, value } = getMargin(k, config)   
    return {
      [styleName]: `${value * config.sizeUnit}${config.unit}`
    }
  }
}