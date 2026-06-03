/**
 * duration
 * 
 * duration-{value} transition-duration: {value}ms;
 */

const getStyle = (k, config) => {
  const num = k.replace('duration', '').replace('-', '')
  return {
    'transition-duration': `${num}ms`,
  }
}

const regex = /^duration-?\d+$/i

export default {
  name: 'duration',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}