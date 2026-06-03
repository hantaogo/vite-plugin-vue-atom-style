export default {
  match: (k, config) => {
    return k === 'focus'
  },
  translate: (k, config) => {
    return {
      pseudo: ':focus',
    }
  }
}