const parse = (k, config) => {
  if (k.startsWith('spacex')) {
    const size = Number.parseInt(k.replace('spacex', ''))
    if (Number.isNaN(size)) {
      return
    }
    return {
      selector: '>*:not(:last-child)',
      'margin-right': `${size * config.sizeUnit}${config.unit}`
    }
  } else if (k.startsWith('spacey')) {
    const size = Number.parseInt(k.replace('spacey', ''))
    if (Number.isNaN(size)) {
      return
    }
    return {
      selector: '>*:not(:last-child)',
      'margin-bottom': `${size * config.sizeUnit}${config.unit}`
    }
  } else if (k.startsWith('space')) {
    const size = Number.parseInt(k.replace('space', ''))
    if (Number.isNaN(size)) {
      return
    }
    return {
      selector: '>*:not(:last-child)',
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