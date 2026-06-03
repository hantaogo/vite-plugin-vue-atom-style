import { darken, lighten, fade } from '../color-helper'

const keys = ['l', 'd', 't']

const getKeyValue = (k, config) => {
  // k：例如 t50
  for (const key of keys) {
    const exp = `^${key}(\\d{1,2}|100)$`
    const regex = new RegExp(exp)
    const result = k.match(regex, k)
    // [ 't50', '50', ... ]
    if (!Array.isArray(result) || result.length < 2) {
      continue
    }
    const value = Number.parseInt(result[1])
    if (Number.isNaN(value)) {
      continue
    }
    return { key, value }
  }
}

export default {
  match: (k, config) => {
    return !!getKeyValue(k, config)
  },
  translate: (k, config, obj) => {
    const { key, value } = getKeyValue(k, config)
    const colorObj = {
    }
    for (const k in obj) {
      if (['color', 'border-color', 'background-color'].includes(k)) {
        const oldColor = obj[k]
        if (key === 'l') {
          colorObj[k] = lighten(oldColor, value)
        } else if (key === 'd') {
          colorObj[k] = darken(oldColor, value)
        } else if (key === 't') {
          colorObj[k] = fade(oldColor, value)
        }
      }
    }
    return colorObj
  }
}