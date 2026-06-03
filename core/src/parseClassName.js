// 作用：将组合类拆分成多个类，减少排列组合
// 分隔符：--
// 颜色：red300--D50--T50 红色，黑暗50%，透明度50%
// 伪类：hover 鼠标经过
// 主题：dark 黑暗模式
// <div red300--D50--T50--hover--dark/>
export const parseClassName = (className, options) => {
  if (typeof className !== 'string' || className === '') {
    return
  }
  const sep = options.config.markSeperator || '--'
  const parts = className.split(sep)
  const name = parts[0].toLowerCase()
  const markNames = parts.length > 1 ? parts.slice(1).map(t => t.toLowerCase()) : []
  return {
    name,
    markNames,
  }
}