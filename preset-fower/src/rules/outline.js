/**
 * outline
 * 
 * outlineNone 	outline: none;
 * outline-{value} outline: {value};
 */

const getStyle = (k, config) => {
  // outlineNone
  if (k === 'outlineNone') {
    return {
      outline: 'none',
    }
  }
  // outline-2px-dotted-red
  const str = `outline${config.vs}`
  if (k.startsWith(str)) {
    const regex = new RegExp(`${config.vs}`, 'g')
    const val = k.replace(str, '').replace(regex, ' ')
    return {
      'outline': val,
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