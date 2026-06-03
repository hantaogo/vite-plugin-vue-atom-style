export default {
  match: (k, config) => {
    return k === 'checked'
  },
  translate: (k, config) => {
    return {
      pseudo: ':checked',
    }
  }
}