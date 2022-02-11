/**
 * Box Alignment
 * 
 * justifyContent={value} justify-content: {value};
 * alignItems ={value} align-items: {value};
 * alignContent={value} align-content: {value};
 * alignSelf={value} align-self: {value};
 */
const data = {
  justifycontent: 'justify-content',
  alignitems: 'align-items',
  aligncontent: 'align-content',
  alignself: 'align-self',
}

const getStyle = (k, config) => {
  let foundKey = undefined
  for (const key in data) {
    if (k.startsWith(`${key}-`)) {
      foundKey = key
      break
    }
  }
  if (foundKey) {
    const value = k.replace(`${foundKey}-`, '')
    if (value) {
      return {
        [data[foundKey]]: value
      }
    }
  }
}

export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}