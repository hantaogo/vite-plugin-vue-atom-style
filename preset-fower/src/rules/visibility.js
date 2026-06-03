const data = {
  visible: 'visible',
  invisible: 'hidden',
}

/**
 * Visibility
 * 
 * visible | invisible
 */
export default {
  name: 'visibility',
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    const value = data[k]
    if (value) {
      return {
        visibility: value
      }
    }
  }
}