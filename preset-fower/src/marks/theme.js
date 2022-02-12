const regex = /^light|dark$/i

/**
 * theme
 * 
 * light -> @media (prefers-color-scheme: light )
 * dark -> @media (prefers-color-scheme: dark)
 * _ -> @media (prefers-color-scheme: no-preference)
 */
export default {
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return {
      theme: k,
    }
  }
}