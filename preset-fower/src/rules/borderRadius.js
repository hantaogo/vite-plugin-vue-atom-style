const borderRadius = 'border-radius'
const borderTopLeftRadius = 'border-top-left-radius'
const borderTopRightRadius = 'border-top-right-radius'
const borderBottomRightRadius = 'border-bottom-right-radius'
const borderBottomLeftRadius = 'border-bottom-left-radius'

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
  const type = k.replace('rounded', '')
  const p = config.theme.radii[type]
  if (p) {
    // 预定义值
    return {
      [borderRadius]: `${p}${config.unit}`
    }
  } else {
    // 手动填写的值
    for (const key in typesMap) {
      if (k.startsWith(key)) {
        const value = k.replace(`${key}-`, '')
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

const regex = /^rounded.+$/i

/**
 * 圆角
 */
export default {
  name: 'borderRadius',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}