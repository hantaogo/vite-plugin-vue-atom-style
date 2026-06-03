/**
 * delay
 * 
 * delay-{value} transition-delay: {value}ms;
 */

const getStyle = (k, config) => {
  const num = k.replace('delay', '').replace('-', '')
  return {
    'transition-delay': `${num}ms`,
  }
}

const regex = /^delay-?\d+$/i

export default {
  name: 'delay',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}