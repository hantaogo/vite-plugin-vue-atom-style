const selector = '>*:not(:last-child)'

const parse = (k, config) => {
  if (k.startsWith(`spacex-`)) {
    // spaceX-10 横向间距10
    const [_, val] = k.split('-')
    const size = Number.parseInt(val)
    if (Number.isNaN(size)) {
      return
    }
    return {
      selector,
      'margin-right': `${size}${config.unit}`
    }
  } else if (k.startsWith(`spacex`)) {
    // spaceX10 横向间距10 * 系数
    size = Number.parseInt(k.replace('spacex', ''))
    if (!Number.isNaN(size)) {
      return {
        selector,
        'margin-right': `${size * config.sizeUnit}${config.unit}`
      }
    }
  } else if (k.startsWith(`spacey-`)) {
    // spaceY-10 纵向间距10
    const [_, val] = k.split('-')
    const size = Number.parseInt(val)
    if (Number.isNaN(size)) {
      return
    }
    return {
      selector,
      'margin-bottom': `${size}${config.unit}`
    }
  } else if (k.startsWith('spacey')) {
    // spaceY10 纵向间距 10 * 系数
    const size = Number.parseInt(k.replace('spacey', ''))
    if (Number.isNaN(size)) {
      return
    }
    return {
      selector,
      'margin-bottom': `${size * config.sizeUnit}${config.unit}`
    }
  } else if (k.startsWith(`space-`)) {
    // space10 间距 10
    const [_, val] = k.split('-')
    const size = Number.parseInt(val)
    if (Number.isNaN(size)) {
      return
    }
    return {
      selector,
      'margin-right': `${size}${config.unit}`,
      'margin-bottom': `${size}${config.unit}`
    }
  } else if (k.startsWith('space')) {
    // space10 间距 10 * 系数
    const size = Number.parseInt(k.replace('space', ''))
    if (Number.isNaN(size)) {
      return
    }
    return {
      selector,
      'margin-right': `${size * config.sizeUnit}${config.unit}`,
      'margin-bottom': `${size* config.sizeUnit}${config.unit}`
    }
  }
}

export default {
  match: (k, config) => {
    return !!parse(k, config)
  },
  translate: (k, config) => {
    return parse(k, config)
  }
}