const getStyle = (k, config) => {
  const key = k.replace('font', '')
  const value = config.theme.fontWeights[key]
  if (value) {
    return {
      'font-weight': value,
    }
  }
}

const regex = /^font.+$/i

/**
 * fontWeight
 * 
 * font20 | font-20 | fontThin | fontNormal ...
 */
export default {
  name: 'fontWeight',
  match: (k, config) => {
    if (!regex.test(k)) {
      return
    }
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}