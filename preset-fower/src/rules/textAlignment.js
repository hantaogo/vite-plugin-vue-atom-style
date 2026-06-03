const styleName = 'text-align'

const data = {
  textleft: 'left',
  textcenter: 'center',
  textright: 'right',
  textjustify: 'justify',
}

const getStyle = (k, config) => {
  if (data[k]) {
    return {
      [styleName]: data[k]
    }
  } else if (k.startsWith(`textalign`)) {
    const value = k.replace('textalign', '').replace('-', '')
    if (value) {
      return {
        [styleName]: value
      }
    }
  }
}

/**
 * textAlign-{value} | textLeft | textCenter | textRight | textJustify | textAlign
 */
export default {
  name: 'textAlignment',
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}