const styleName = 'background-clip'

const data = {
  bgclipborder: {
    [styleName]: 'border-box',
  },
  bgclippadding: {
    [styleName]: 'padding-box',
  },
  bgclipcontent: {
    [styleName]: 'content-box',
  },
  bgcliptext: {
    [styleName]: 'text',
  },
}

/**
 * bgClipBorder | bgClipPadding | bgClipContent | bgClipText
 */
export default {
  name: 'backgroundClip',
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return data[k]
  }
}