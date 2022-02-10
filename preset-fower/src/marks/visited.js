export default {
  match: (k, config) => {
    return k === 'visited'
  },
  translate: (k, config) => {
    return {
      pseudo: ':visited',
    }
  }
}