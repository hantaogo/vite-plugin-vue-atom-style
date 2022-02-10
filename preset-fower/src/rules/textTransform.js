const styleName = 'text-transform'

const data = {
  uppercase: {
    [styleName]: 'uppercase',
  },
  lowercase: {
    [styleName]: 'lowercase',
  },
  capitalize: {
    [styleName]: 'capitalize',
  },
  normalcase: {
    [styleName]: 'none',
  },
}

/**
 * uppercase | lowercase | capitalize | normalcase
 */
export default {
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return data[k]
  }
}