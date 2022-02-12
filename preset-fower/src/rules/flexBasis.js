import { parseSize } from '../utils'

const regex = /^flexbasis-?.+$/i

/**
 * flexBasis
 * flexBasis-{value}
 */
export default {
  name: 'flexBasis',
  match: (k, config) => {
    return regex.test(k)
  },
  translate: (k, config, obj) => {
    const value = k.replace(`flexbasis`, '').replace('-', '')
    // basis 不为0时，自动附件尺寸单位
    let basis = value
    if (basis !== '0') {
      const size = parseSize(value, config.unit)
      basis = size || value
    }
    return {
      display: 'flex',
      'flex-basis': basis
    }
  }
}