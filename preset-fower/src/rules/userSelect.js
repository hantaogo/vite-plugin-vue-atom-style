/**
 * selectNone	user-select: none;
 * selectAll	user-select: all;
 * selectText	user-select: text;
 * selectAuto	user-select: auto;
 */

const data = {
  selectnone: 'none',
  selectall: 'all',
  selecttext: 'text',
  selectauto: 'auto',
}

const getStyle = (k, config) => {
  if (data[k]) {
    return {
      'user-select': data[k],
    }
  }
}

export default {
  name: 'userSelect',
  match: (k, config) => {
    return getStyle(k, config)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}