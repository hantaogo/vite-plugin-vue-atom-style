export default {
  match: (k, config) => {
    return k === 'active'
  },
  translate: (k, config) => {
    return {
      pseudo: ':active',
    }
  }
}