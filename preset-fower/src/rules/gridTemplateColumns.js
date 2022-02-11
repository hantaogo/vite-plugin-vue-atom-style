const getStyle = (k, config) => {
  const columnRegex = /^gridtemplatecolumns\-(\d+)$/i
  const result = k.match(columnRegex)
  if (Array.isArray(result) && result.length >= 2) {
    const [_, value] = result
    let num = Number.parseInt(value)
    if (!Number.isNaN(num)) {
      return {
        'grid-template-columns': `repeat(${num}, minmax(0px, 1fr))`
      }
    }
  }
}

/**
 * gridTemplateColumns
 * 
 * gridTemplateColumns-{value}	grid-template-columns: repeat({value}, minmax(0px, 1fr));
 */
export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}