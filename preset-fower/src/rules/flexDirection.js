const styleName = 'flex-direction'
const regex = /^(row|column|flexdirection-?.+)$/i

/**
 * flex 方向
 * row
 * column
 * flexDirection
 */
export default {
  name: 'flexDirection',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    const result = k.match(regex)
    if (Array.isArray(result) && result.length >= 2) {
      const [_, key] = result
      if (key === 'row') {
        return {
          display: 'flex',
          [styleName]: 'row',
        }
      } else if (key === 'column') {
        return {
          display: 'flex',
          [styleName]: 'column',
        }
      } else {
        const value = key.replace('flexdirection', '').replace('-', '')
        return {
          display: 'flex',
          [styleName]: value,
        }
      }
    }
  }
}