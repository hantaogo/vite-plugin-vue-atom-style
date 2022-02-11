/**
 * 解析尺寸，不支持小数
 * 
 * 负数：n代替-
 * -15 = n15
 * 
 * 百分比：p代替%
 * 15% = 15p
 * 
 * 其他单位：
 * 15rem = 15rem
 * 15px = 15px
 * 15vw = 15vw
 * 15... = 15...
 * 
 * 默认单位：
 * defaultUnit = 'px'
 * 15 = 15px
 * defaultUnit = 'vw'
 * 15 = 15vw
 * defaultUnit = undefined
 * 15 = 15
 */
export const parseSize = (str, defaultUnit = '', unitSize = 1) => {
  const result = str.match(/^(n?)(\d+)(.*)$/i)
  if (Array.isArray(result) && result.length >= 4) {
    let [_, negative, value, unit] = result
    if (unit === 'p') {
      unit = '%'
    }
    const num = Number.parseInt(value)
    if (!Number.isNaN(num)) {
      const i = unit ? 1 : (unitSize || 1)
      const text = `${negative ? '-' : ''}${num * i}${unit || defaultUnit || ''}`
      return text
    }
  }
}
