const regex = /^(gap|rowgap|columngap)(-?)(\d+)$/i

const getStyle = (k, config) => {
  const result = k.match(regex)
  if (Array.isArray(result) && result.length >= 4) {
    const [_, type, sep, value] = result
    const data = {
      gap: 'gap',
      rowgap: 'row-gap',
      columngap: 'column-gap',
    }
    const num = sep ? value : value * config.unitSize
    return {
      [data[type]]: `${num}${config.unit}`
    }
  }
}

/**
 * Gap
 * 
 * gap-{value}	gap: {value};
 * rowGap-{value}	row-gap: {value};
 * columnGap-{value}	column-gap: {value};
 */
export default {
  name: 'gap',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}