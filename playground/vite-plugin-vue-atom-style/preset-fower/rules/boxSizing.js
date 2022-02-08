export default {
  match: (k, config) => {
    let v = ''
    if (k === 'boxBorder') v = 'border-box'
    if (k === 'boxContent') v = 'content-box'
    return !!v
  },
  translate: (k, config) => {
    let v = ''
    if (k === 'boxBorder') v = 'border-box'
    if (k === 'boxContent') v = 'content-box'
    return {
      'box-sizing': v
    }
  },
}