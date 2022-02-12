const data = {
  appearancenone: {
    appearance: 'none',
  },
}

/**
 * appearanceNone
 */
export default {
  name: 'appearance',
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return data[k]
  }
}