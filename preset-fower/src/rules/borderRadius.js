const borderRadius = 'border-radius'
const borderTopLeftRadius = 'border-top-left-radius'
const borderTopRightRadius = 'border-top-right-radius'
const borderBottomRightRadius = 'border-bottom-right-radius'
const borderBottomLeftRadius = 'border-bottom-left-radius'

const borderRadiusSize = {
  roundedfull: 9999,
  roundedtiny: 2,
  roundedsmall: 4,
  roundedmedium: 6,
  roundedlarge: 8,
  roundedhuge: 12,
  roundedgigantic: 16,
}

const typesMap = {
  rounded: [borderRadius],
  roundedtop: [borderTopLeftRadius, borderTopRightRadius],
  roundedright: [borderTopRightRadius, borderBottomRightRadius],
  roundedbottom: [borderBottomLeftRadius, borderBottomRightRadius],
  roundedleft: [borderTopLeftRadius, borderBottomLeftRadius],
  roundedtopleft: [borderTopLeftRadius],
  roundedtopright: [borderTopRightRadius],
  roundedbottomleft: [borderBottomLeftRadius],
  roundedbottomright: [borderBottomRightRadius],
}

const getStyle = (k, config) => {
  if (k === 'roundednone') {
    return {
      [borderRadius]: 'none'
    }
  } else if (borderRadiusSize[k]) {
    return {
      [borderRadius]: `${borderRadiusSize[k]}${config.unit}`
    }
  } else {
    for (const key in typesMap) {
      if (k.startsWith(`${key}${config.vs}`)) {
        const [_, value] = k.split(config.vs)
        const size = Number.parseInt(value)
        if (!Number.isNaN(size)) {
          const obj = {}
          for (const type of typesMap[key]) {
            obj[type] = `${size}${config.unit}`
          }
          return obj
        }
      }
    }
  }
}

/**
 * 圆角
 */
export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}