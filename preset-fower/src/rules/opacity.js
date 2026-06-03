const regex = /^opacity-?([0-9]{1,2}|100)$/i

/**
 * opacity
 * 
 * 透明度 0-100
 * opacity50 | opacity-50 -> opacity: 0.5
 */
export default {
  name: 'opacity',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    const num = k.replace('opacity', '').replace('-', '')
    return {
      'opacity': num / 100,
    }
  }
}