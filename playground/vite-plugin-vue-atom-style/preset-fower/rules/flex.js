const data = {
  column: {
    'flex-direction': 'column'
  },
  toCenter: {
    'justify-content': 'center',
    'align-items': 'center'
  },
}

export default {
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return {
      display: 'flex',
      ...data[k],
    }
  }
}