const styleName = 'border-style'

const data = {
  bordersolid: 'solid',
  borderdashed: 'dashed',
  borderdotted: 'dotted',
  borderdouble: 'double',
  bordernone: 'none',
}

/**
 * 边框宽度
 * 
 * borderSolid	border-width: {value};
 * border{Top,Right,Bottom,Left}-{value}	border-{side}-width: {value};
 */
export default {
  name: 'borderStyle',
  match: (k, config) => {
    return !!data[k]
  },
  translate: (k, config) => {
    return {
      [styleName]: data[k],
    }
  }
}