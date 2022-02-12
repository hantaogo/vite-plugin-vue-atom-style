const data = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  normalcase: 'none',
}

/**
 * Text Transform
 * 
 * uppercase | lowercase | capitalize | normalcase
 */
export default {
  name: 'textTransform',
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    const value = data[k]
    if (value) {
      return {
        'text-transform': value
      }
    }
  }
}