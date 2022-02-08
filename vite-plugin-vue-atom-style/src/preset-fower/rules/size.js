const namesMap = {
  w: ['width'],
  h: ['height'],
  square: ['width', 'height'],
  circle: ['width', 'height', 'border-radius'],
  minw: ['min-width'],
  maxw: ['max-width'],
  minh: ['min-height'],
  maxh: ['max-height'],
}

const parse = (k, config) => {
  const regex = /^([wh]|square|circle|min[hw]|max[hw])(\d+)$/i;
  const result = k.match(regex)
  // result形如：null 或 ['square100', 'square', '100', ...]
  if (!Array.isArray(result) || result.length < 3) {
    return
  }
  const key = result[1]
  const value = parseInt(result[2])
  if (Number.isNaN(value)) {
    return
  }
  return { names: namesMap[key], value }
}

export default {
  match: (k, config) => {
    return !!parse(k, config)
  },
  translate: (k, config) => {
    const { names, value } = parse(k, config)
    const style = {}
    for (const name of names) {
      style[name] = `${value}${config.unit}`
    }
    return style
  }
}