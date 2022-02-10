const data = {
  leadingnone: {
    'line-height': '1',
  },
  leadingtight: {
    'line-height': '1.25',
  },
  leadingsnug: {
    'line-height': '1.375',
  },
  leadingnormal: {
    'line-height': '1.5',
  },
  leadingrelaxed: {
    'line-height': '1.625',
  },
  leadingloose: {
    'line-height': '2',
  },
}

export default {
  match: (k, config) => {
    return data[k]
  },
  translate: (k, config) => {
    return data[k]
  }
}