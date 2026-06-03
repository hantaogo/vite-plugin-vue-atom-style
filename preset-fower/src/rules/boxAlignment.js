/**
 * Box Alignment
 * 
 * justifyContent-{value} justify-content: {value};
 * justifyItems-{value} justify-items: {value};
 * justifySelf-{value} justify-self: {value};
 * alignContent-{value} align-content: {value};
 * alignItems-{value} align-items: {value};
 * alignSelf-{value} align-self: {value};
 */
const data = {
  justifycontent: 'justify-content',
  justifyitems: 'justify-items',
  justifyself: 'justify-self',
  alignitems: 'align-items',
  aligncontent: 'align-content',
  alignself: 'align-self',
}

const regex = /^(justifycontent|justifyitems|justifyself|aligncontent|alignitems|alignself).+$/i

const getStyle = (k, config) => {
  let foundKey = undefined
  for (const key in data) {
    if (k.startsWith(`${key}-`)) {
      foundKey = key
      break
    }
  }
  if (foundKey) {
    const value = k.replace(`${foundKey}`, '').replace('-', '')
    if (value) {
      const obj = {
        [data[foundKey]]: value
      }
      if (foundKey !== 'justifyitems') {
        obj.display = 'flex'
      }
      return obj
    }
  }
}

export default {
  name: 'boxAlignment',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}