import { parseSize } from '../utils'

const regex = /^(top|right|bottom|left)(-?)(.+)?$/i

const getStyle = (k, config) => {
  const result = k.match(regex)
  if (Array.isArray(result) && result.length >= 4) {
    const key = result[1]
    const sep = result[2]
    const value = result[3]
    const size = parseSize(value, config.unit, sep ? 1 : config.unitSize)
    if (size) {
      return {
        [key]: size
      }
    }
  }
}

/**
 * Top / Right / Bottom / Left
 * 
 * 例如：
 * top20 top: 20px;
 * 
 * 负数：
 * top-20 top: -20px;
 * 
 * 百分比，后面加p：
 * top20p top: 20%;
 * top-20p top: -20%;
 */
export default {
  name: 'topRightBottomLeft',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config) => {
    return getStyle(k, config)
  }
}