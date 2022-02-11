const styleName = 'display'

const data = {
  block: 'block',
  inline: 'inline',
  inlineblock: 'inline-block',
  flex: 'flex',
  inlineflex: 'inline-flex',
  grid: 'grid',
  hidden: 'none',
}

const getStyle = (k, config) => {
  if (data[k]) {
    return {
      [styleName]: data[k],
    }
  } else if (k.startsWith(`display-`)) {
    const value = k.replace(`display-`, '')
    if (value) {
      return {
        [styleName]: value
      }
    }
  }
}

/**
 * display-{value} | block | inline | inlineBlock | flex | inlineFlex | grid | hidden
 */
export default {
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}