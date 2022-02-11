const regex = /^overflow(x|y)?-(.+)$/i

const getStyle = (k, config) => {
  const result = k.match(regex)
  if (Array.isArray(result) && result.length >= 3) {
    const key = result[1]
    const suffix = key ? `-${key}` : ''
    const value = result[2]
    return {
      [`overflow${suffix}`]: value,
    }
  }
}

/**
 * Overflow
 *
 * overflow-{value}	overflow: {value}
 * overflowX-{value}	overflow-x: {value}
 * overflowY-{value}	overflow-y:{value}
 */
export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}