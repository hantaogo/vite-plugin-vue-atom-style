const gapRegex = /(gap|rowgap|columngap)\-(\d+)/i
const columnRegex = /gridtemplatecolumns\-(\d+)/i

const getStyle = (k, config) => {
  // gap|rowgap|columngap
  const gapResult = k.match(gapRegex)
  if (Array.isArray(gapResult) && gapResult.length >= 3) {
    const [_, gap, value] = gapResult
    let num = Number.parseInt(value)
    if (!Number.isNaN(num)) {
      return {
        [gap]: `${num}${config.unit}`
      }
    }
  }
  // gridTemplateColumns
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
 * 格子
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