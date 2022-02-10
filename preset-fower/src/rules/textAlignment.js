const styleName = 'text-align'

const data = {
  textleft: {
    [styleName]: 'left',
  },
  textcenter: {
    [styleName]: 'center',
  },
  textright: {
    [styleName]: 'right',
  },
  textjustify: {
    [styleName]: 'justify',
  },
}

const getStyle = (k, config) => {
  if (data[k]) {
    return data[k]
  } else if (k.startsWith(`textalign${config.vs}`)) {
    const [_, value] = k.split('textalign')
    return {
      [styleName]: value
    }
  }
}

/**
 * textAlign-{value} | textLeft | textCenter | textRight | textJustify | textAlign
 */
export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}