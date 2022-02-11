const data = {
  appearancenone: {
    appearance: 'none',
  },
}

/**
 * appearanceNone
 */
export default {
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return data[k]
  }
}