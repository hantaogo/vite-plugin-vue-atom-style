const regex = /^landscape|portrait$/i

/**
 * orientation
 * 
 * landscape -> @media (orientation: landscape )
 * portrait -> @media (orientation: portrait)
 */
export default {
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return {
      orientation: k,
    }
  }
}