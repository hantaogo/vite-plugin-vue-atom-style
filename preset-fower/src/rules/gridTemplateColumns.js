const getStyle = (k, config) => {
  const numColumn = k.replace('gridtemplatecolumns', '').replace('-', '')
  return {
    'grid-template-columns': `repeat(${numColumn}, minmax(0px, 1fr))`
  }
}

const regex = /^gridtemplatecolumns-?(\d+)$/i

/**
 * gridTemplateColumns
 * 
 * gridTemplateColumns-{value}	grid-template-columns: repeat({value}, minmax(0px, 1fr));
 */
export default {
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}