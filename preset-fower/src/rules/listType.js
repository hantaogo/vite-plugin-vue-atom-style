const name = 'list-style-type'

const data = {
  listnone: {
    [name]: 'none',
  },
  listdisc: {
    [name]: 'disc',
  },
  listdecimal: {
    [name]: 'decimal',
  },
}

export default {
  name: 'listType',
  match: (k, config) => {
    return data[k]
  },
  translate: (k, config) => {
    return data[k]
  }
}