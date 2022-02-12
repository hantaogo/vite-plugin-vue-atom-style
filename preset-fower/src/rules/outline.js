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
  const str = `outline-`
  if (k.startsWith(str)) {
    const val = k.replace(str, '').replace(/\-/g, ' ')
    return {
      'outline': val,
    }
  }
}

export default {
  name: 'outline',
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}