const getStyle = (k, config) => {
  const regex = /^(gap|rowgap|columngap)\-(\d+)$/i
  const result = k.match(regex)
  if (Array.isArray(result) && result.length >= 3) {
    const [_, type, value] = result
    let num = Number.parseInt(value)
    if (!Number.isNaN(num)) {
      const data = {
        gap: 'gap',
        rowgap: 'row-gap',
        columngap: 'column-gap',
      }
      return {
        [data[type]]: `${num}${config.unit}`
      }
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
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}