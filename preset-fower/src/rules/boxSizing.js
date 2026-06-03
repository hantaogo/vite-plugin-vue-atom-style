/**
 * Box Sizing
 * 
 * boxBorder	box-sizing: border-box;
 * boxContent	box-sizing: content-box;
 */

const styleName = 'box-sizing'

const data = {
  boxborder: {
    [styleName]: 'border-box',
  },
  boxcontent: {
    [styleName]: 'content-box',
  },
}

export default {
  name: 'boxSizing',
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return data[k]
  },
}