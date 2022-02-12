const data = {
  italic: {
    'font-style': 'italic',
  },
  notitalic: {
    'font-style': 'normal',
  },
}

export default {
  name: 'fontStyle',
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return data[k]
  }
}