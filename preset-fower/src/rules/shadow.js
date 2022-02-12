const getShadow = (k, config) => {
  if (!k.startsWith('shadow')) {
    return
  }
  let type = k.replace('shadow', '')
  if (!type) {
    type = 'base'
  }
  return config.theme.shadows[type]
}

export default {
  name: 'shadow',
  match: (k, config) => {
    return !!getShadow(k, config)
  },
  translate: (k, config) => {
    const shadow = getShadow(k, config)
    return {
      'box-shadow': shadow.replace('px', config.unit)
    }
  }
}