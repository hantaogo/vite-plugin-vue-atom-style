export default {
  match: (k, config) => {
    return k === 'hover'
  },
  translate: (k, config) => {
    return {
      pseudo: ':hover',
    }
  }
}